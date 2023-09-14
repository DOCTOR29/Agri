const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')
const GGFPO = require('../models/modelGGFPO')
const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/ggfpo', (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render('GGFPO', {
        message: req.flash('message') || ""
    })
}
)

router.post('/form/ggfpo', async(req, res) => {
    try {
        const regForm = new GGFPO({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/ggfpo')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get('/form/ggfpo', async (req, res) => {
    try {
        const formData = await GGFPO.find()

        const fields = [
            "slNo",
            "date",
             "district",
             "block",
             "village",
             "nameOfFPC",
             "focusCommodity",
             "detailAddressOfFPC",
             "memberMale",
             "memberFemale",
             "totalMembers",
             "registrationYear",
             "corporateIdentificationNumber",
             "villagesCovered",
             "officialMailId",
             "ceoInPlace",
             "ceoName",
             "ceoContactInfo",
             "bankAccount",
             "bankName",
             "branchName",
             "accountType",
             "landArea"
           

        
        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment('Go_Green_FPO-FPC.csv').send(csv)
        // res.redirect('/ggfpo')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post('/form/ggfpo/bulk', uploadiile.single('GGFPO'), csvController.upload)


module.exports = router