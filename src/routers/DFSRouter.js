const express = require('express')
const router = express.Router()
const {rmdir, readdir} = require('fs')
const DFS = require('../models/modelDFS')
const json2csv = require('json2csv').parse
const uploadFile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

router.get('/dfs', (req, res) => {
    const dir = path.join(__dirname, '../../resources')
 
    rmdir(dir, { recursive: true, force: true }, err => {
        
        console.log(`${dir} is deleted!`);
      });
    res.render('dehaatfieldsurvey', {
        message: req.flash('message') || ""
    })
}
)

router.post('/form/dfs', async(req, res) => {
    try {
        const regForm = new DFS({
            ...req.body
        })
        console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/dfs')
    } catch (error) {
        res.status(400).send(error)  
    }
})

router.get('/form/dfs', async (req, res) => {
    try {
        const formData = await DFS.find()

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
        res.redirect('/dfs')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post('/form/dfs/bulk', uploadFile.single('DFS'), csvController.upload)


module.exports = router