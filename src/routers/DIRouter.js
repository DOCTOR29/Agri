const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')
const DI = require('../models/ModelDI')
const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/di', (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render('dehaatInsurance', {
        message: req.flash('message') || ""
    })
}
)

router.post('/form/di', async(req, res) => {
    try {
        const regForm = new DI({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/di')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get('/form/di', async (req, res) => {
    try {
        const formData = await DI.find()

        const fields = [
            "dateOfIssuance",
            "insuranceCompany",
             "insuranceType",
             "aaprtDistrict",
             "aaprtBlock",
             "village",
             "name",
             "age",
             "gender",
             "landHolding",
             "isFirstTimeInsurance",
             "isCropInsurance",
             "insurancePremium",
             "insuranceCoverage"
           

        
        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment('Dehaat_Insurance.csv').send(csv)
        // res.redirect('/di')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post('/form/di/bulk', uploadiile.single('DI'), csvController.upload)


module.exports = router