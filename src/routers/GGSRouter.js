const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')
const GGS = require('../models/modelGGS')
const json2csv = require('json2csv').parse
const uploadfile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/ggs', async (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
    });
    // req.flash('message', ' Successfully Entry Updated.')
//    if(req.flash().message)
//      { var stringM =  await req.flash().message.toString() || ""}
//     console.log("redirect form", stringM || "")
    res.render('GGS', {
        
        message: req.flash().message || ""
    })
}
)

router.post('/form/ggs', async(req, res) => {
    try {
        const regForm = new GGS({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        console.log("post form",req.flash('message'))
        res.redirect('/ggs')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get('/form/ggs', async (req, res) => {
    try {
        const formData = await GGS.find()

        const fields = [
           "slNo",
           "date",
            "apartDistrict",
            "apartBlock",
            "village",
            "capacity",
        
        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment('Go_Green_silos.csv').send(csv)
        // res.redirect('/df')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post('/form/ggs/bulk', uploadfile.single('GGS'), csvController.upload)


module.exports = router