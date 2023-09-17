const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')

const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const SCV = 'SCV'
const csvName ='SAM-CREDIT-VLE.csv'
const SCFU = require(`../models/model${SCV.toUpperCase()}`)

    
router.get(`/${SCV}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render(SCV.toUpperCase(), {
        message: req.flash('message') || ""
    })
}
)

router.post(`/form/${SCV}`, async(req, res) => {
    try {
        const regForm = new  SCFU ({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect(`/${SCV}`)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get(`/form/${SCV}`, async (req, res) => {
    try {
        const formData = await SCFU.find()

        const fields = [
            "SlNo",
            "DateOfDisbursement",
            "APARTDistrict",
            "APARTBlock",
            "Village",
            "NameOfVLE",
            "LoanAmount",
            "Tenure"
          
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
    router.post(`/form/${SCV}/bulk`, uploadiile.single(SCV.toUpperCase()), csvController.upload)


module.exports = router