const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')
const DF = require('../models/modelDF')
const json2csv = require('json2csv').parse
const uploadfile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/df', (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render('dehaatFinancing', {
        message: req.flash('message') || ""
    })
}
)

router.post('/form/df', async(req, res) => {
    try {
        const regForm = new DF({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/df')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get('/form/df', async (req, res) => {
    try {
        const formData = await DF.find()

        const fields = [
           "dateOfDisbursement",
           "aaprtDistrict",
            "aaprtBlock",
            "village",
            "nameOfFPOFPC",
            "cinOfFPC",
            "loanAmount",
            "tenure",
            "isFirstTimeLoan",
            "valueChain"
        
        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment('Dehaat_Financing.csv').send(csv)
        // res.redirect('/df')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post('/form/df/bulk', uploadfile.single('DF'), csvController.upload)


module.exports = router