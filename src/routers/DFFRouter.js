const express = require('express');
const router = express.Router()
const path = require('path')
require('../db/conn.js');
const DFF = require('../models/modelDFFarmers.js')
const hbs = require('hbs');
const json2csv = require('json2csv').parse 
const uploadFile = require('../middleware/upload.js');
const csvController = require('../controllers/dffcsv.js');


router.post('/form/dff', async (req, res) => {
    try {
        const regForm = new DFF({
            ...req.body
        })
        console.log(req.body)
        await regForm.save();
        req.flash('message', ' Successfully Entry Updated.')
        res.redirect('/dff')
    } catch (error) {
        res.status(400).send(error)  
    }
})


router.get('/dff', (req, res) =>
{   
    res.render('DehaatFinancingFarmers',
        { message: req.flash('message') || "" }
    )
})


router.get('/form/dff', async (req, res) => {
    try {
        const formData = await DFF.find()

        const fields = [
            { label: "Date Of Disbursement", value: 'dateOfDisbursement' },
            { label: "AAPRT District", value: 'AAPRTDistrict' },
            { label: "APART Block", value: 'APARTBlock' },
            { label: "Name Of Farmer", value: 'nameOfFarmer' },
            { label: "Whether Associated With FPO/FPC", value: 'whetherAssociatedWithFPOFPC' },
            { label: "Name Of FPO/FPC", value: 'nameOfFPOFPC' },
            { label: "CIN Of The FPC", value: 'CINOfTheFPC' },
            { label: "guarantee Provided By FPOFPC", value: 'guaranteeProvidedByFPOFPC' },
            { label: "Loan Amount", value: 'loanAmount' },
            { label: "Tenure", value: 'tenure' },
            { label: "Whether Loan Taken For First Time", value: 'whetherLoanTakenForFirstTime' },
            { label: "Value Chain", value: 'valueChain' },
        
        ]
        const csv = json2csv(formData, { fields })
        req.flash('message', 'Download Success')
        res.attachment('Dehaat_Financing_Farmers.csv').send(csv)
        res.redirect('/')
        // res.status(200).download(csvPathtxt,'agridb.csv')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
    
}
)
router.post('/form/dff/bulk', uploadFile.single('DFF'), csvController.upload);

module.exports = router