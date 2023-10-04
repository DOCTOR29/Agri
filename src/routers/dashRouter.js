const express = require('express')
const DFF = require('../models/modelDFFarmers')
const DF = require('../models/modelDF')
const DI = require('../models/modelDInsurance')

const router = express.Router()



router.get('/dehaat', async  (req, res) => {
    var countFinancing = 0;
    var sumLoanAmountFPO = 0;
    var financingFarmersCount = 0;
    var sumLoanAmount = 0;
    var insuranceCount = 0;
    var countMale = 0, countFemale = 0 
    const formDF = await DF.find()
    const formDFF = await DFF.find()
    const formDI = await DI.find()

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
        dashName: 'Go Green'
    }

    formDI.forEach(() => insuranceCount++)

    formDFF.forEach((entry) => {
        financingFarmersCount++
        sumLoanAmount += entry.loanAmount
        if(entry.gender ==='Male')
        { countMale++ }
        else {
            countFemale++
        }
    })

    formDF.forEach(() => countFinancing++)

    formDF.forEach((entry) => {
        sumLoanAmountFPO += entry.loanAmount
    })
 
    const donut1 = {
        male: countMale,
        female: countFemale,

    }
    const donut2 = {
        data1: 100,
        data2: 0,
        name1: 'NA',
        name2: "NA"
    }
    const donut3 = {
        data1: sumLoanAmountFPO,
        data2: sumLoanAmount,
        name1: 'Ratio of Value of Credit to FPO',
        name2: 'Value of credit to individual farmers'
    }

    
    data.card1 = countFinancing
    data.card2 = sumLoanAmountFPO
    
    data.card7 = financingFarmersCount
    data.card8 = sumLoanAmount
    
    data.card11 = insuranceCount

    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
            console.log(data[key])
        }
    }
    res.render('MBSdash', {
        data,
        dashName:  'Dehaat test',
        donut1, donut2 ,donut3
       
    })
})
// needs doing


module.exports = router
