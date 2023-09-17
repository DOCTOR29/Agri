const express = require('express')

const router = express.Router()
const FC = require('../models/modelFC')
const FS = require('../models/modelFS')
const FA = require('../models/modelFA')
const FI = require('../models/modelFI')
const FO = require('../models/modelFO')
const FT = require('../models/modelFT')


router.get('/fia', async  (req, res) => {
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
        dashName: 'FIA'
    }
    var male = 0
    var female = 0
    formFC = await FC.find()
    formFS = await FS.find()
    formFA = await FA.find()
    formFI = await FI.find()
    formFO = await FO.find()
    formFT = await FT.find()
    formFC.forEach(element => {
        data.card7++
        data.card8 += element.LoanAmount
        if (element.Gender === 'Male') {
            male++
        } else { 
            female++
        }
    });
    formFS.forEach(element => {
        data.card9++
        if (element.Gender === 'Male') {
            male++
        } else { 
            female++
        }
        
    });
    formFA.forEach(element => {
        data.card10++
        if (element.Gender === 'Male') {
            male++
        } else { 
            female++
        }
        
    });
    formFI.forEach(element => {
        data.card11++
        if (element.Gender === 'Male') {
            male++
        } else { 
            female++
        }
        
    });
    formFO.forEach(element => {
        data.card12++
        
    });
    
    formFT.forEach(element => {
        data.card13+= (element.CashOut + element.CashIn)
        
    });
    
    const donut1 = {
        //beneficiary
        male,
        female,

    }
    const donut2 = {
        // insurance
        data1: data.card10,
        data2: data.card11,
        name1: 'APY',
        name2: "Insurance"
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

     res.render('MBSdash', { data, donut1, donut2, donut3})
})


module.exports = router
