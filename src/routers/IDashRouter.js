const express = require('express')

const router = express.Router()
const IC = require('../models/modelIC')
const IS = require('../models/modelIS')
const IA = require('../models/modelIA')
const IO = require('../models/modelIO')
const IT = require('../models/modelIT')
const II = require('../models/modelII')
const json2csv = require('json2csv').parse
router.get('/integra/data', async (req, res) => {
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
        card13: 0,
        name13: 'Transaction',
        name1: 'Number of FPO Receiving Credit',
        name2: 'Value of Credit to FPOs',
        name3: 'Number of VLEs receiving credit',
        name4: 'Value of Credit received by VLES',
        name5: 'Number of FIGs receiving credit',
        name6: 'Value of credit to FIGs',
        name7: 'Farmers receiving credit',
        name8: 'Value of Credit to farmers',
        name9: 'Savings Account',
        name10: 'APY',
        name11: 'Insurance',
        name12: 'BC Agents',
        dashName: 'Integra'
    }
    const image = '../assets/img/Blank.png'
    var male = 0
    var female = 0
    formIC = await IC.find()
    formIC.forEach(entry => {
        data.card7++
        data.card8 += entry.LoanAmount
        if (entry.Gender === 'Male') {
            male++
        } else {
            female++
        }
    })
    formIS = await IS.find()
    formIS.forEach(entry => {
        data.card9++
        if (entry.Gender === 'Male') {
            male++
        } else {
            female++
        }
       
    })
    formIA = await IA.find()
    formIA.forEach(entry => {
        data.card10++
        if (entry.Gender === 'Male') {
            male++
        } else {
            female++
        }
       
    })
    formIO = await IO.find()
    formIO.forEach(entry => {
        data.card12++
       
    })
    formII = await II.find()
    formII.forEach(entry => {
        data.card11++
       
    })
    formIT = await IT.find()
    formIT.forEach(entry => {
        data.card13+= ( entry.CashIn + entry.CashOut)
       
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
        data3: 0,
        name1: 'NA',
        name2: 'NA',
        name3: 'NA'
    }
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }


    try {

        const fields = [
            { label: 'Transaction', value: 'card13' },
            { label: 'Number of FPO Receiving Credit', value: 'card1' },
            { label: 'Value of Credit to FPOs', value: 'card2' },
            { label: 'Number of VLEs receiving credit', value: 'card3' },
            { label: 'Value of Credit received by VLES', value: 'card4' },
            { label: 'Number of FIGs receiving credit', value: 'card5' },
            { label: 'Value of credit to FIGs', value: 'card6' },
            { label: 'Farmers receiving credit', value: 'card7' },
            { label: 'Value of Credit to farmers', value: 'card8' },
            { label: 'Savings Account', value: 'card9' },
            {label: 'APY', value: 'card10' },
            { label: 'Insurance', value: 'card1' },
            { label: 'BC Agents', value: 'card12' }
    
        ]
       
        const csv = json2csv(data, {fields});
        // req.flash('message', 'Download Success')
        res.attachment(`${data.dashName}.csv`).send(csv)
        // res.redirect('/ci')
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})


router.get('/integra', async  (req, res) => {
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
        card13: 0,
        name13: 'Transaction',
        name1: 'Number of FPO Receiving Credit',
        name2: 'Value of Credit to FPOs',
        name3: 'Number of VLEs receiving credit',
        name4: 'Value of Credit received by VLES',
        name5: 'Number of FIGs receiving credit',
        name6: 'Value of credit to FIGs',
        name7: 'Farmers receiving credit',
        name8: 'Value of Credit to farmers',
        name9: 'Savings Account',
        name10: 'APY',
        name11: 'Insurance',
        name12: 'BC Agents',
        dashName: 'Integra'
    }
    const offerings = {
        data1: "1. Insurance",
        data2: "2. Credit",
        data3: "",
        data4: "",
        

    }
    const image = '../assets/img/Blank.png'
    var male = 0
    var female = 0
    formIC = await IC.find()
    formIC.forEach(entry => {
        data.card7++
        data.card8 += entry.LoanAmount
        if (entry.Gender === 'Male') {
            male++
        } else {
            female++
        }
    })
    formIS = await IS.find()
    formIS.forEach(entry => {
        data.card9++
        if (entry.Gender === 'Male') {
            male++
        } else {
            female++
        }
       
    })
    formIA = await IA.find()
    formIA.forEach(entry => {
        data.card10++
        if (entry.Gender === 'Male') {
            male++
        } else {
            female++
        }
       
    })
    formIO = await IO.find()
    formIO.forEach(entry => {
        data.card12++
       
    })
    formIT = await IT.find()
    formIT.forEach(entry => {
        data.card13+= ( entry.CashIn + entry.CashOut)
       
    })
    formII = await II.find()
    formII.forEach(entry => {
        data.card11++
       
    })
    
    const donut1 = {
        //beneficiary
        male,
        female,
        name1: 'Male',
        name2: 'Female'
  

    }
    if (donut1.male === 0 && donut1.female === 0) {
        donut1.male = 100
        donut1.female = 0
        donut1.name1 = 'NA'
        donut1.name2 = 'NA'
        
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
        data3: 0,
        name1: 'NA',
        name2: 'NA',
        name3: 'NA'
    }
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }
    
     res.render('MBSdash', { offerings, data, donut1, donut2, donut3,image})
})


module.exports = router
