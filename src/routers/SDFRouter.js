const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')

const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const samdigitfpo = 'SDF'
const csvName ='samdijitfpo.csv'
const samdigitfpoU = require(`../models/model${samdigitfpo.toUpperCase()}`)

    
router.get(`/${samdigitfpo}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render(samdigitfpo.toUpperCase(), {
        message: req.flash('message') || ""
    })
}
)

router.post(`/form/${samdigitfpo}`, async(req, res) => {
    try {
        const regForm = new  samdigitfpoU ({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect(`/${samdigitfpo}`)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get(`/form/${samdigitfpo}`, async (req, res) => {
    try {
        const formData = await samdigitfpoU.find()

        const fields = [
          
            "slNo",
            "dateOfOnboarding",
             "apartDistrict",
             "apartBlock",
             "nameOfFPOFPC",
             "iffpcCIN",
             "focusCommodity",
             "memberMale",
             "memberFemale",
             
             
             
             
           

        
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
    router.post(`/form/${samdigitfpo}/bulk`, uploadiile.single(samdigitfpo.toUpperCase()), csvController.upload)


module.exports = router