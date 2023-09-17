const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')
const DT = require('../models/modelDT.js')
const json2csv = require('json2csv').parse
const uploadtile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/dt', (req, res) => {
    const dtr = path.join(__dirname, '../../resources')
 
    rmdir(dtr, { recursive: true, force: true }, err => {
        
        console.log(`${dtr} is deleted!`);
      });
    res.render('dehaatTraining', {
        message: req.flash('message') || ""
    })
}
)

router.post('/form/dt', async(req, res) => {
    try {
        const regForm = new DT({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/dt')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)  
    }
})

router.get('/form/dt', async (req, res) => {
    try {
        const formData = await DT.find()

        const fields = [
            "dateOfTraining",
           "aaprtDistrict",
            "aaprtBlocks",
            "villages",
            "topicsCovered",
            "numberOfAttendees",
           

        
        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment('Dehaat_Training.csv').send(csv)
        // res.redtrect('/dt')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post('/form/dt/bulk', uploadtile.single('DT'), csvController.upload)


module.exports = router