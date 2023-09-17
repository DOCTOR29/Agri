const express = require('express')

const router = express.Router()
// const SCFP = require('../models/modelSCFP')
const SCV = require('../models/modelSCV')
const SCF = require('../models/modelSCF')
const SCFP = require('../models/modelSCFP')


router.get('/samunnati', async  (req, res) => {
    var data = {
        card1:0,
        card2:0,
        card3:0,
        card4:0,
        card5:0,
        card6:0,
        card7:0,
        card8:0,
        card9:0,
        card10:0,
        card11:0,
        card12: 0,
        card13:0,
        dashName: 'Samunnati'
    }
    var male = 0
    var female = 0
    
    formSCFP = await SCFP.find()
    formSCV = await SCV.find()
    formSCF = await SCF.find()

    formSCF.forEach(element => {
        data.card7++
        if (element.gender === 'Male') {
            male++
        } else
       { female++}
        data.card8 += element.loanAmount
    });
    

    formSCFP.forEach(element => {
        data.card1++
        data.card2 += element.LoanAmount
    });
    formSCV.forEach(element => {
        data.card3++
        data.card4 += element.LoanAmount
    });

    
    const donut1 = {
        //beneficiary
        male,
        female,

    }
    const donut2 = {
        // insurance
        data1: 100,
        data2: 0,
        name1: 'NA',
        name2: "NA"
    }
    const donut3 = {
        // credit
        data1: data.card2,
        data2: data.card4,
        data3rs
            : data.card8,
        name1: 'Value of Credit to FPO',
        name2: 'Value of Credit to VLE',
        name3: 'Value of Credit to Farmner'
    }
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }

     res.render('MBSdash', { data, donut1, donut2, donut3})
})


module.exports = router
