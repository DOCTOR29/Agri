const express = require('express')

const router = express.Router()
const ESCOI = require('../models/modelESCOI')


router.get('/ESCO', async  (req, res) => {
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
        card13:0,
        dashName: 'ESCO'
    }
    var male = 0
    var female = 0
    
    const formESCOI = await ESCOI.find()
    formESCOI.forEach((entry) => {
        data.card11++
        if (entry.Gender === 'Male')
        {
            male++
        } else {
            female++
            }
    })
    
    const donut1 = {
        //beneficiary
        male,
        female,

    }
    const donut2 = {
        // insurance
        data1: 100,
        data2: 0,
        name1: 'NA',
        name2: "NA"
    }
    const donut3 = {
        // credit
        data1: 100,
        data2: 0,
        data3: 0,
        name1: 'NA',
        name2: 'NA',
        name3: 'NA'
    }
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }

     res.render('MBSdash', { data, donut1, donut2, donut3})
})


module.exports = router
