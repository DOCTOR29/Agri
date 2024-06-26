const express = require('express')
const router = express.Router()
const {rmdir, readdir} = require('fs')
const DB = require('../models/modelDB')
const json2csv = require('json2csv').parse
const uploadbile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/db', (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render('dehaatBeneficiaries', {
        message: req.flash('message') || ""
    })
}
)

router.post('/form/db', async(req, res) => {
    try {
        const regForm = new DB({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/db')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get('/form/db', async (req, res) => {
    try {
        const formData = await DB.find()

        const fields = [
           "noOfBeneficiaries",
           "date",
            "apartDistrict",
            "apartBlock",
            "village",
            "name",
            "age",
            "gender",
            "landHolding",
            "FPOFPCName"
        
        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment('Dehaat_Beneficiaries.csv').send(csv)
        // res.redirect('/db')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post('/form/db/bulk', uploadbile.single('DB'), csvController.upload)


module.exports = router