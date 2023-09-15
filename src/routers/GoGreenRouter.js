<<<<<<< HEAD
const express = require('express')

const router = express.Router()
const GGCF = require('../models/modelGGCF')
const GGCI = require('../models/modelGGCI')


router.get('/gogreen', async  (req, res) => {
    var data = {
        card1:487,
        card2:1874000,
        card3:0,
        card4:0,
        card5:0,
        card6:0,
        card7:360,
        card8:1700000,
        card9:0,
        card10:0,
        card11:0,
        card12: 0,
        dashName: 'Go Green'
    }


    const formGGCF = await GGCF.find()
    const formGGCI = await GGCI.find()

    formGGCI.forEach((entry) => {
        data.card7++
        data.card8 +=entry.loanAmount
    })

    formGGCF.forEach((entry) => {
        data.card1++
        data.card2 += entry.loanAmount

    })
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }






    res.render('gogreen', { data })
})
// needs doing
router.get('/form/data', async (req, res) => {

    const formGGCI = await GGCI.find()
    const formGGCF = await GGCI.find()


    var sumLoanAmount = 0
    var sumLoanAmountFPO = 0

    formGGCF.forEach((entry) => {

        sumLoanAmount += entry.loanAmount
    })

    formGGCI.forEach((entry) => {
        sumLoanAmountFPO += entry.loanAmount

    })

    var countMale = 0, countFemale = 0

    formGGCI.forEach((form) => {
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
=======
const express = require('express')

const router = express.Router()
const GGCF = require('../models/modelGGCF')
const GGCI = require('../models/modelGGCI')


router.get('/gogreen', async  (req, res) => {
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
        dashName: 'Go Green'
    }


    const formGGCF = await GGCF.find()
    const formGGCI = await GGCI.find()

    formGGCI.forEach((entry) => {
        data.card7++
        data.card8 +=entry.loanAmount
    })

    formGGCF.forEach((entry) => {
        data.card1++
        data.card2 += entry.loanAmount

    })
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }
   

  


   
    res.render('gogreen', { data })
})
// needs doing
router.get('/form/data/gogreen', async (req, res) => {

    const formGGCI = await GGCI.find()
    const formGGCF = await GGCI.find()
  
    
    var sumLoanAmount = 0
    var sumLoanAmountFPO = 0
    
    formGGCF.forEach((entry) => {
       
        sumLoanAmount += entry.loanAmount
    })

    formGGCI.forEach((entry) => {
        sumLoanAmountFPO += entry.loanAmount
       
    })

    var countMale = 0, countFemale = 0 
    
    formGGCI.forEach((form) => {
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
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf
