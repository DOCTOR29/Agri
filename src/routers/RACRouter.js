const express = require('express')
const router = express.Router()
const {rmdir} = require('fs')

const json2csv = require('json2csv').parse
const uploadiile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const routName = 'rac'
const csvName ='Rangde-area-coveredunder-hyv-potato.csv'
const routNameU = require(`../models/model${routName.toUpperCase()}`)


router.get(`/${routName}`, (req, res) => {
    const dir = path.join(__dirname, '../../resources')

    rmdir(dir, { recursive: true, force: true }, err => {

        console.log(`${dir} is deleted!`);
      });
    res.render(routName.toUpperCase(), {
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
            
            "date",
            "apartDistrict",
            "apartBlock",
            "village",
            "nameOfFPC",
            "amountOfSeedsDistributed",
            "areaCovered"
        ]

        const csv = json2csv(formData, { fields })
        res.header('Content-Type', 'text/csv')
        res.attachment(csvName)
        res.send(csv)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post(`/form/${routName}/bulk`, uploadiile.single(routName.toUpperCase()), csvController.upload)

module.exports = router
