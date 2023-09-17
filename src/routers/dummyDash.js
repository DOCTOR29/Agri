const express = require('express')

const router = express.Router()

router.get('/somedash', async (req, res) => {
    var data = {
        card1: 232,
        card2: 113,
        card3: 3230,
        card4: 0,
        card5: 3230,
        card6: 3220,
        card7: 220,  //change this data for changing the dash board card tiles
        card8: 0,
        card9: 0,
        card10: 0,
        card11: 0,
        card12: 0,
        card13: 0,
        dashName: 'Name of dash'
    }
    res.render('ESAFDash', { data })

})

router.get('/newdash', async (req, res) => {
    var data = {
        card1: 444,
        card2:444,
        card3: 44,
        card4: 33344,
        card5: 324430,
        card6: 33333,
        card7: 2233330,  //change this data for changing the dash board card tiles
        card8: 0,
        card9: 0,
        card10: 0,
        card11: 0,
        card12: 0,
        card13: 0,
        dashName: 'new dash'
    }
    res.render('ESAFDash', { data })

})


router.get('/againdash', async (req, res) => {
    var data = {
        card1: 333,
        card2:444,
        card3: 44,
        card4: 33344,
        card5: 324430,
        card6: 33333,
        card7: 2233330,  //change this data for changing the dash board card tiles
        card8: 0,
        card9: 0,
        card10: 0,
        card11: 0,
        card12: 0,
        card13: 0,
        dashName: 'nedsadsaw dash'
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
        male: countMale ||10, female: countFemale||20, creditVal1:90, creditVal2:130, creditVal3:150
    }

    res.send(benefeciaries)
})



module.exports = router