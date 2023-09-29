const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')

const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const routName = 'mtr'
const csvName ='MBS-TRANSACTION.csv'
const routNameU = require(`../models/modelMT`)


router.get(`/${routName}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')

    rmdir(dir, { recursive: true, force: true }, err => {

        console.log(`${dir} is deleted!`);
      });
    res.render("MTR", {
        routName,
        message: req.flash('message') || ""
    })
}
)

router.post(`/form/${routName}`, async(req, res) => {
    try {
        const regForm = new  routNameU ({
            ...req.body
        })
        // console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect(`/${routName}`)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get(`/form/${routName}`, async (req, res) => {
    try {
        const formData = await routNameU.find()

        const fields = [


            "SlNo",
            "DCSCode",
            "APARTDistrict",
            "APARTBlock",
            "CashIn",
            "CashOut"






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
