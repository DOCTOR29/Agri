const express = require('express')
const DFF = require('../models/modelDff')
const router = express.Router()
require('../db/conn.js');


router.get('/', async (req, res) => {
     res.render('index', )
})

router.get('/form/data', async (req, res) => {
    const formDFF = await DFF.find()
    var countMale =0, countFemale = 0 
    formDFF.forEach((form) => {
        if(form.gender ==='Male')
        { countMale++ }
        else {
            countFemale++
        }
        
       
    });
    
    const benefeciaries = { male: countMale, female:countFemale}
    console.log(benefeciaries)
    res.send(benefeciaries)
})


module.exports = router
