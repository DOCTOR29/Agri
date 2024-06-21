const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')
const DInsurance = require('../models/modelDInsurance')
const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/DInsurance', (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render('dehaatInsurance', {
        message: req.flash('message') || ""
    })
}
)

router.post('/form/DInsurance', async(req, res) => {
    try {
        const regForm = new DInsurance({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/DInsurance')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get('/form/DInsurance', async (req, res) => {
    try {
        const formData = await DInsurance.find()

        const fields = [
            "dateOfIssuance",
            "insuranceCompany",
             "insuranceType",
             "aaprtDistrict",
             "aaprtBlock",
             "village",
             "name",
             "phone",
             "gender",
             "landHolding",
             "isFirstTimeInsurance",
            
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
    router.post('/form/DInsurance/bulk', uploadiile.single('DInsurance'), csvController.upload)


module.exports = router