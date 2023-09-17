const express = require('express')

const router = express.Router()

const VC = require('../models/modelVC')
const VI = require('../models/modelVI')


router.get('/vimo', async (req, res) => {
    
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
        dashName: 'Vimo'
    }
    var male = 0
    var female = 0
    
    formVC = await VC.find()
    formVI = await VI.find()
    formVC.forEach((entry) => {
        data.card1++
        data.card2+=entry.LoanAmount
    })
    formVI.forEach((entry) => {
        data.card11++
        if (entry.gender === 'Male')
        {
            male++
        }
        else {
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
