const express = require('express')
const router = express.Router()
const {rmdir, readdir} = require('fs')
const DFSS = require('../models/modelDFSS')
const json2csv = require('json2csv').parse
const uploadFile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/dfss', (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render('dehaatfieldsurvey', {
        message: req.flash('message') || ""
    })
}
)

router.post('/form/dfss', async(req, res) => {
    try {
        const regForm = new DFSS({
            ...req.body
        })
        console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/dfss')
    } catch (error) {
        res.status(400).send(error)  
    }
})

router.get('/form/dfss', async (req, res) => {
    try {
        const formData = await DFSS.find()

        const fields = [
           "noOfFieldsurveysConducted",
           "dateOfSurveyCompletion",
            "apartDistricts",
            "apartBlocks",
            "village",
            "fposCovered",
            "membersCovered",
            "nonMembersCovered",
        
        ]
        const csv = json2csv(formData, { fields})
        req.flash('message', 'Download Success')
        res.attachment('Dehaat_Field_Surveys.csv').send(csv)
        // res.redirect('/dfs')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post('/form/dfss/bulk', uploadFile.single('DFSS'), csvController.upload)


module.exports = router