<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')
const GGCI = require('../models/modelGGCI')
const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const routName ='md'
const csvName ='MBS-transaction.csv'

router.get(`/${routName}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')

    rmdir(dir, { recursive: true, force: true }, err => {

        console.log(`${dir} is deleted!`);
      });
    res.render('GGCI', {
        message: req.flash('message') || ""
    })
}
)

router.post(`/form/${routName}`, async(req, res) => {
    try {
        const regForm = new GGCI({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/ggci')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get(`/form/${routName}`, async (req, res) => {
    try {
        const formData = await GGCI.find()

        const fields = [
            "SLNo",
            "DateOfRegistration",
             "APARTDistrict",
             "APARTBlock",
             "Village",
             "AgentName",
             "Age",
             "AgentCode",
             "Gender",
             "ActiveInactive",




        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment(csvName).send(csv)
        // res.redirect('/ci')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post(`/form/${routName}/bulk`, uploadiile.single(routName.toUpperCase()), csvController.upload)


module.exports = router
=======
const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')

const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const routName ='md'
const csvName ='MBS-transaction.csv'
const MD = require(`../models/model${routName.toUpperCase()}`)
// const MD = require('../models/model'+routName.toString())
router.get(`/${routName}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')

    rmdir(dir, { recursive: true, force: true }, err => {

        console.log(`${dir} is deleted!`);
      });
    res.render(routName, {
        message: req.flash('message') || ""
    })
}
)

router.post(`/form/${routName}`, async(req, res) => {
    try {
        const regForm = new MD({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/MD')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get(`/form/${routName}`, async (req, res) => {
    try {
        const formData = await MD.find()

        const fields = [
            "SLNo",
            "DateOfRegistration",
             "APARTDistrict",
             "APARTBlock",
             "Village",
             "AgentName",
             "Age",
             "AgentCode",
             "Gender",
             "ActiveInactive",




        ]
        const csv = json2csv(formData, { fields})
        // req.flash('message', 'Download Success')
        res.attachment(csvName).send(csv)
        // res.redirect('/ci')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})
    router.post(`/form/${routName}/bulk`, uploadiile.single(routName.toUpperCase()), csvController.upload)


module.exports = router
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf
