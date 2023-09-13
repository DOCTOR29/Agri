const express = require('express')
const DFF = require('../models/modelDff')
const DF = require('../models/modelDF')
const DI = require('../models/ModelDI')

const router = express.Router()



router.get('/dehaat', async  (req, res) => {
    var countFinancing = 0;
    var sumLoanAmountFPO = 0;
    var financingFarmersCount = 0;
    var sumLoanAmount = 0;
    var insuranceCount = 0;
   
    const formDF = await DF.find()
    const formDFF = await DFF.find()
    const formDI = await DI.find()

    formDI.forEach(() => insuranceCount++)

    formDFF.forEach((entry) => {
        financingFarmersCount++
        sumLoanAmount += entry.loanAmount
    })

    formDF.forEach(() => countFinancing++)

    formDF.forEach((entry) => {
        sumLoanAmountFPO += entry.loanAmount
    })

    
   
    res.render('index2', {
        countFinancing, sumLoanAmountFPO,
        financingFarmersCount,
        sumLoanAmount, insuranceCount,
        dashName:  " "
       
    })
})
// needs doing
router.get('/form/data', async (req, res) => {

    const formDF = await DF.find()
    const formDFF = await DFF.find()
    var sumLoanAmount = 0
    var sumLoanAmountFPO = 0
    
    formDFF.forEach((entry) => {
       
        sumLoanAmount += entry.loanAmount
    })

    formDF.forEach((entry) => {
        sumLoanAmountFPO += entry.loanAmount
       
    })

    var countMale = 0, countFemale = 0 
    
    formDFF.forEach((form) => {
        if(form.gender ==='Male')
        { countMale++ }
        else {
            countFemale++
        }
     
    });
  
    
    
    const benefeciaries = {
        male: countMale, female: countFemale, sumLoanAmountFPO, sumLoanAmount
    }

    res.send(benefeciaries)
})

router.get('/go-green', async (req, res) => {

}) 

module.exports = router
