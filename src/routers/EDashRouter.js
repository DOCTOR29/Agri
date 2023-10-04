const express = require('express')

const router = express.Router()
const EFP = require('../models/modelEFP')
const EF = require('../models/modelEF')
const EG = require('../models/modelEG')

const EB = require('../models/modelEB')
const EA = require('../models/modelEA')
const EI = require('../models/modelEI')
const EBR = require('../models/modelEBR')
const ECSP = require('../models/modelECSP')
const ET = require('../models/modelET')


router.get('/esaf', async  (req, res) => {
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
        dashName: 'ESAF'
    }
    var male = 0
    var female = 0
    formEFP = await EFP.find()
    formEF = await EF.find()
    formEFP.forEach(entry => {
        data.card1++
        data.card2+=entry.LoanAmount
    })
    formEG = await EG.find()
    formEG.forEach(entry => {
        data.card7++
        data.card8 += entry.LoanAmount
        if (entry.Gender === 'Male') {
            male++
        }else{ female++}
    })
    formEA = await EA.find()
    formEA.forEach(entry => {
        data.card10++
        if (entry.Gender === 'Male') {
            male++
        }else{ female++}
        
    })
    formEI = await EI.find()
    formEI.forEach(entry => {
        data.card11++
        if (entry.Gender === 'Male') {
            male++
        }else{ female++}
        
    })
    formEB = await EB.find()
    formEB.forEach(entry => {
        data.card9++
        if (entry.Gender === 'Male') {
            male++
        }else{ female++}
        
    })
    formEBR = await EBR.find()
    formEBR.forEach(entry => {
        data.card12++
        
    })
    formECSP = await ECSP.find()
    formECSP.forEach(entry => {
        data.card12++
        
    })
    formET = await ET.find()
    formET.forEach(entry => {
        data.card12+=(entry.CashIn + entry.CashOut)
        
    })
    formEF.forEach(entry => {
        data.card5++
        data.card6+=entry.LoanAmount
    })
    
    const donut1 = {
        //beneficiary
        male,
        female,

    }
    const donut2 = {
        // insurance
        data1:  data.card10,
        data2: data.card11,
        name1: 'SSS',
        name2: "Insurance"
    }
    const donut3 = {
        // credit
        data1: data.card2,
        data2: data.card6,
        data3: 0,
        name1: 'Value of Credit to FPO',
        name2: 'Value of Credit to FIG',
        name3: 'Value of Crdit to farmers'
    }
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }

     res.render('MBSdash', { data, donut1, donut2, donut3})
})


module.exports = router
