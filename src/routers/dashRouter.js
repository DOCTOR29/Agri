const express = require('express')
const DFF = require('../models/modelDff')
const router = express.Router()
require('../db/conn.js');


router.get('/', async (req, res) => {
     res.render('index', )
})

router.get('/form/data', async (req, res) => {
    const formDFF = await DFF.find()
    var countMale = 0 
    formDFF.forEach(() => {
        countMale++
        
       
    });
    const benefeciaries = { male: countMale, female:20}

    res.send(benefeciaries)
})


module.exports = router
