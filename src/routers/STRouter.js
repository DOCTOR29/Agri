const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')

const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const ST = 'ST'
const csvName ='SAM-Training.csv'
const STU = require(`../models/model${ST.toUpperCase()}`)

    
router.get(`/${ST}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render(ST.toUpperCase(), {
        message: req.flash('message') || ""
    })
}
)

router.post(`/form/${ST}`, async(req, res) => {
    try {
        const regForm = new  STU ({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect(`/${ST}`)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get(`/form/${ST}`, async (req, res) => {
    try {
        const formData = await STU.find()

        const fields = [
          
            "SlNo",
            "DateOfTraining",
             "APARTDistrict",
             "APARTBlock",
             "TrainingProvidedByKalgudiSamunnati",
             "FPOFPCName",
             "NumberOfBODsCEOsTrained",
             
             
             
           

        
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
    router.post(`/form/${ST}/bulk`, uploadiile.single(ST.toUpperCase()), csvController.upload)


module.exports = router