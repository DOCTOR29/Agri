const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')

const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const SML = 'SML'
const csvName ='SAM-Linkage.csv'
const SMLU = require(`../models/model${SML.toUpperCase()}`)

    
router.get(`/${SML}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render(SML.toUpperCase(), {
        message: req.flash('message') || ""
    })
}
)

router.post(`/form/${SML}`, async(req, res) => {
    try {
        const regForm = new  SMLU ({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect(`/${SML}`)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get(`/form/${SML}`, async (req, res) => {
    try {
        const formData = await SMLU.find()

        const fields = [
          
            "SlNo",
            "Date",
             "APARTDistrict",
             "APARTBlock",
             "FPC",
             "Product",
             "SKUs",
             "RFQsGenerated",
             "OrderVolume",
             "OrderValue",
             
        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment(csvName).send(csv)
        // res.redirect('/ci')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post(`/form/${SML}/bulk`, uploadiile.single(SML.toUpperCase()), csvController.upload)


module.exports = router