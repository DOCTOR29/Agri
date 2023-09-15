const express = require('express')

const router = express.Router()
const MB = require('../models/modelMB')
const MC = require('../models/modelMC')
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
<<<<<<< HEAD
        card7:1287,
        card8:2000000,
        card9:1236,
        card10:0,
        card11:0,
        card12: 186,
        card13:1239,
=======
        card7:0,
        card8:0,
        card9:0,
        card10:0,
        card11:0,
        card12: 0,
        card13:0,
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf
        dashName: 'MBS'
    }


    const formMC = await MC.find()
    const formMT = await MT.find()
    const formMB = await MB.find()
    const formMD = await MD.find()



    formMT.forEach((entry) => {
<<<<<<< HEAD

        data.card13 +=(entry.CashIn+entry.CashOut)

=======
        
        data.card13 +=(entry.CashIn+entry.CashOut)
        
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf
    })

    formMC.forEach((entry) => {
        data.card7++
        data.card8 +=entry.loanAmount
    })

    formMB.forEach((entry) => {
        data.card9++
        // data.card2 += entry.loanAmount

    })
    formMD.forEach((entry) => {
        data.card12++
        // data.card2 += entry.loanAmount

    })
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }
<<<<<<< HEAD






=======
   

  


   
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf
    res.render('MBSdash', { data })
})
// needs doing
router.get('/form/data/mbs', async (req, res) => {

    const formMC = await MC.find()
    const formMB = await MB.find()
<<<<<<< HEAD


    // var sumLoanAmount = 0
    // var sumLoanAmountFPO = 0
    var countMale = 0, countFemale = 0
    formMB.forEach((entry) => {

=======
  
    
    // var sumLoanAmount = 0
    // var sumLoanAmountFPO = 0
    var countMale = 0, countFemale = 0 
    formMB.forEach((entry) => {
       
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf
        if(form.gender ==='Male')
        { countMale++ }
        else {
            countFemale++
        }
    })

<<<<<<< HEAD



=======
    
    
    
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf
    formMC.forEach((form) => {
        if(form.gender ==='Male')
        { countMale++ }
        else {
            countFemale++
        }
<<<<<<< HEAD

    });



=======
     
    });
  
    
    
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf
    const benefeciaries = {
        male: countMale ||10, female: countFemale||20, sumLoanAmountFPO:0, sumLoanAmount:100
    }

    res.send(benefeciaries)
})

// router.get('/go-green', async (req, res) => {

<<<<<<< HEAD
// })
=======
// }) 
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf

module.exports = router
