const express = require('express')

const router = express.Router()

router.get('/mbsdash', async (req, res) => {
    var data = {
        card1: 0,
        card2: 0,
        card3: 0,
        card4: 0,
        card5: 0,
        card6: 0,
        card7: 1220,  //change this data for changing the dash board card tiles
        card8: 2000000,
        card9: 1387,
        card10: 0,
        card11: 0,
        card12: 123,
        card13: 1239,
        dashName: 'MBS'
    }
    res.render('ESAFDash', { data })

})




router.get('/gg', async (req, res) => {
  var data = {
      card1:487,
      card2:184000,
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
    res.render('ESAFDash', { data })

})


router.get('/dehaat2', async (req, res) => {
    var data = {
        card1: 4337,
        card2:138900,
        card3: 44,
        card4: 33344,
        card5: 0,
        card6: 0,
        card7: 1330,  //change this data for changing the dash board card tiles
        card8: 172000,
        card9: 0,
        card10: 0,
        card11: 2983,
        card12: 0,
        card13: 0,
        dashName: 'Dehaat'
    }
    res.render('ESAFDash', { data })

})



router.get('/esco', async (req, res) => {
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
      dashName: 'Esco Dash'

    }
    res.render('ESAFDash', { data })

})




























//dont touch this

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
        male: countMale ||126, female: countFemale||4, creditVal1:90, creditVal2:130, creditVal3:150
    }

    res.send(benefeciaries)
})



module.exports = router
