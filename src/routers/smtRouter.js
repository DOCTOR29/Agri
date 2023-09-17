const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')

const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const smt = 'smt'
const csvName ='Samunnati Credit FPO/FPC.csv'
const smtU = require(`../models/model${smt.toUpperCase()}`)

    
router.get(`/${smt}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render(smt.toUpperCase(), {
        message: req.flash('message') || ""
    })
}
)

router.post(`/form/${smt}`, async(req, res) => {
    try {
        const regForm = new  smtU ({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect(`/${smt}`)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get(`/form/${smt}`, async (req, res) => {
    try {
        const formData = await smtU.find()

        const fields = [
          
            "SlNo",
            "NameOfFPC",
             "DateOfDisbursement",
             "DisbursementAmount",
             "APARTDistrict",
             "APARTBlock",
             "Village",
             "IfFPCEnterCIN",
             "LoanAmount",
             "Tenure",
             "Validity",
             "ValueChain"
             
             
             
             
           

        
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
    router.post(`/form/${smt}/bulk`, uploadiile.single(smt.toUpperCase()), csvController.upload)


module.exports = router