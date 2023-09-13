const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')
const GGE = require('../models/modelGGE')
const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/gge', (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render('GGE', {
        message: req.flash('message') || ""
    })
}
)

router.post('/form/gge', async(req, res) => {
    try {
        const regForm = new GGE({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/gge')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get('/form/gge', async (req, res) => {
    try {
        const formData = await GGE.find()

        const fields = [
            "slNo",
            "date",
             "apartDistricts",
             "apartBlocks",
             "village",
             "name",
             "age",
             "gender",
             "firstTimeAvailed",
        
        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment('Go-Green-eNWR.csv').send(csv)
        // res.redirect('/gge')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post('/form/gge/bulk', uploadiile.single('GGE'), csvController.upload)


module.exports = router