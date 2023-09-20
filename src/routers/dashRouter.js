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

    
   
    res.render('index2', {
        countFinancing, sumLoanAmountFPO,
        financingFarmersCount,
        sumLoanAmount, insuranceCount,
        dashName:  'Dehaat test',
        donut1, donut2 ,donut3
       
    })
})
// needs doing


module.exports = router
