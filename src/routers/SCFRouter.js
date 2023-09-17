const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')

const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const SCF = 'SCF'
const csvName ='SCF.csv'
const SCFU = require(`../models/model${SCF.toUpperCase()}`)

    
router.get(`/${SCF}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render(SCF.toUpperCase(), {
        message: req.flash('message') || ""
    })
}
)

router.post(`/form/${SCF}`, async(req, res) => {
    try {
        const regForm = new  SCFU ({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect(`/${SCF}`)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get(`/form/${SCF}`, async (req, res) => {
    try {
        const formData = await SCFU.find()

        const fields = [
          
            "slNo",
            "dateOfDisbursement",
             "apartDistrict",
             "apartBlock",
             "village",
             "name",
             "age",
             "agentCode",
             "gender",
             "loanAmount",
            "tenure",
             "valueChain",
             "WhetherFirstTimeFormalCreditAvailed",
             
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
    router.post(`/form/${SCF}/bulk`, uploadiile.single(SCF.toUpperCase()), csvController.upload)


module.exports = router