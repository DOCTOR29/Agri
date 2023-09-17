const express = require('express')

const router = express.Router()
const ESAFFL = require('../models/modelESAFFL')
const ESAFFIGL = require('../models/modelESAFFIGL')
const ESAFBKAD = require('../models/modelESAFBKAD')
const ESAFAPY = require('../models/modelESAFAPY')
const ESAFINS = require('../models/modelESAFINS')
const ESAFGL = require('../models/modelESAFGL')


router.get('/esaf', async  (req, res) => {
    var data = {
        card1:456,
        card2:789000,
        card3:0,
        card4:0,
        card5:77,
        card6:900000,
        card7:157,
        card8:197421,
        card9:149,
        card10:93,
        card11:0,
        card12: 0,
        card13:0,
        dashName: 'ESAF'
    }


    const formESAFFL = await ESAFFL.find()
    const formESAFFIGL = await ESAFFIGL.find()
    const formESAFGL = await ESAFGL.find()
    const formESAFBKAD = await ESAFBKAD.find()
    const formESAFAPY = await ESAFAPY.find()
    // const formESAFINS = await ESAFINS.find()



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
router.get('/form/data/esaf', async (req, res) => {

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

        if(entry.gender ==='Male')
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
