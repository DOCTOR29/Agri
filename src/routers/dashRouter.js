const express = require('express')
const DFF = require('../models/modelDff')
const router = express.Router()

router.get('/', async (req, res) => {
     res.render('index', )
})

router.get('/form/data', async (req, res) => {
    const formDFF = await DFF.find()
    let countMale = 0;
    let countFemale = 0;
    formDFF.forEach(() => {
        countMale++
        
       
    });
    const benefeciaries = { male: countMale, female: countFemale}
    console.log(benefeciaries)
    res.send(benefeciaries)
})


module.exports = router
