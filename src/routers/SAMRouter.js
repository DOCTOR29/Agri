const express = require('express')

const router = express.Router()
const ESAFFL = require('../models/modelESAFFL')
const ESAFFIGL = require('../models/modelESAFFIGL')
const ESAFBKAD = require('../models/modelESAFBKAD')
const ESAFAPY = require('../models/modelESAFAPY')
const ESAFINS = require('../models/modelESAFINS')
const ESAFGL = require('../models/modelESAFGL')


router.get('/sam', async  (req, res) => {
    var data = {
        card1:89,
        card2:1300000,
        card3:132,
        card4:1900000,
        card5:0,
        card6:0,
        card7:1660,  //change this data for changing the dash board card tiles
        card8:3600000,
        card9:0,
        card10:0,
        card11:0,
        card12: 0,
        card13:0,
        dashName: 'Sam'
    }


    const formESAFFL = await ESAFFL.find()
    const formESAFFIGL = await ESAFFIGL.find()
    const formESAFGL = await ESAFGL.find()
    const formESAFBKAD = await ESAFBKAD.find()
    const formESAFAPY = await ESAFAPY.find()
    const formESAFINS = await ESAFINS.find()



    formESAFFL.forEach((entry) => {
        data.card1++
        data.card2 += entry.loanAmount

    })

    formESAFFIGL.forEach((entry) => {
        data.card5++
        data.card6 +=entry.loanAmount
    })

    formESAFGL.forEach((entry) => {
        data.card7++
        data.card8 +=entry.loanAmount
        // data.card2 += entry.loanAmount

    })
    formESAFINS.forEach((entry) => {
        data.card11++

        // data.card2 += entry.loanAmount

    })
    formESAFBKAD.forEach((entry) => {
        data.card9++
        // data.card2 += entry.loanAmount

    })
    formESAFAPY.forEach((entry) => {
        data.card10++
        // data.card2 += entry.loanAmount

    })
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }






    res.render('ESAFDash', { data })
})
// needs doing
router.get('/form/data/sam', async (req, res) => {

    const formESAFGL = await ESAFGL.find()
    const formESAFBKAD = await ESAFBKAD.find()
    const formESAFAPY = await ESAFAPY.find()
    const formESAFINS = await ESAFINS.find()

    // var sumLoanAmount = 0
    // var sumLoanAmountFPO = 0
    var countMale = 0, countFemale = 0
    formESAFGL.forEach((entry) => {

        if(form.gender ==='Male')
        { countMale++ }
        else {
            countFemale++
        }
    })
    formESAFBKAD.forEach((entry) => {

        if(form.gender ==='Male')
        { countMale++ }
        else {
            countFemale++
        }
    })
    formESAFAPY.forEach((entry) => {

        if(form.gender ==='Male')
        { countMale++ }
        else {
            countFemale++
        }
    })
    formESAFINS.forEach((entry) => {

        if(form.gender ==='Male')
        { countMale++ }
        else {
            countFemale++
        }
    })








    const benefeciaries = {
        male: countMale ||10, female: countFemale||20, creditVal1:90, creditVal2:130, creditVal3:150
    }

    res.send(benefeciaries)
})

// router.get('/go-green', async (req, res) => {

// })

module.exports = router
