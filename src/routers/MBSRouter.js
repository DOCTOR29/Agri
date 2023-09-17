const express = require('express')

const router = express.Router()
const MC = require('../models/modelMC')
const MB = require('../models/modelMB')
const MD = require('../models/modelMD')
const MT = require('../models/modelMT')


router.get('/mbs', async  (req, res) => {
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
        dashName: 'Go Green'
    }
    var male = 0
    var female = 0
    const formMC = await MC.find()
    const formMB = await MB.find()
    const formMD = await MD.find()
    const formMT = await MT.find()
    
    formMT.forEach((entry) => {
        data.card13 += (entry.CashIn + entry.CashOut)
    })


    formMD.forEach(() => {
        data.card12++
    })

    formMB.forEach((entry) => {
        data.card9++
        if (entry.gender === 'male') {
            male++
        }
        female++
    })


    formMC.forEach((entry) => {
        data.card7++
        data.card8 += entry.loanAmount
        if (entry.gender === 'male') {
            male++
        } else
        {female++}
    })

    
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
        data1: 100,
        data2: 0,
        name1: 'NA',
        name2: 'NA'
    }
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }

     res.render('MBSdash', { data, donut1, donut2, donut3})
})


module.exports = router
