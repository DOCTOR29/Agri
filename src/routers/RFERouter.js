
const express = require('express')
const router = express.Router()
const { rmdir } = require('fs')

const json2csv = require('json2csv').parse
const uploadFile = require('../middleware/upload.js');
const csvController = require('../controllers/csvUploadController.js');
const path = require('path')

const routName = 'rfe'
const csvName = 'Rangde-Farm-Equipments.csv'
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
})

router.post(`/form/${routName}`, async (req, res) => {
    try {
        const regForm = new routNameU({
            ...req.body
        })
        await regForm.save();
        req.flash('message', 'Successfully Entry Updated.')
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
        "submissionDate",
        "apartDistrict",
        "apartBlock",
        "village",
        "nameOfFPC",
        "equipmentName"
        ]
        const csv = json2csv(formData, { fields })
        res.attachment(csvName).send(csv)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

router.post(`/form/${routName}/bulk`, uploadFile.single(routName.toUpperCase()), csvController.upload)

module.exports = router


