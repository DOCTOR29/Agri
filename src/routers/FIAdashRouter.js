const express = require('express')

const router = express.Router()
const FC = require('../models/modelFC')
const FS = require('../models/modelFS')
const FA = require('../models/modelFA')
const FI = require('../models/modelFI')
const FO = require('../models/modelFO')
const FT = require('../models/modelFT')
const json2csv = require('json2csv').parse

router.get('/fia/data', async (req, res) => { 
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
        dashName: 'FIA'
    }
    // const image = '../assets/img/FIA.png'
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
        dashName: 'FIA'
    }
    
    const image = '../assets/img/FIA.png'
    const offerings = {
        data1: "1. Credit",
        data2: "2. Savings",
        data3: "3. Insurance",
        data4: "4. Social Security Schemes",
        

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
    data.card10 +=data.card9
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
        data1: data.card10,
        data2: data.card11,
        name1: 'APY',
        name2: "Insurance"
    }
    if (donut2.data1 === 0 && donut2.data2 === 0) {
        donut2.data1 = 100
        donut2.data2 = 0
        donut2.name1 = 'NA'
        donut2.name2 = 'NA'
    
        
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

     res.render('MBSdash', { offerings,data, donut1, donut2, donut3, image})
})


module.exports = router
