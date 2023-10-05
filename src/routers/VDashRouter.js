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
        card13: 0,
        name13: 'Transaction',
        name1: 'Number of FPO Receiving Credit',
        name2: 'Value of Credit to FPOs',
        name3: 'Number of VLEs receiving credit',
        name4: 'Value of Credit received by VLES',
        name5: 'Number of FIGs receiving credit',
        name6: 'Value of credit to FIGs',
        name7: 'Farmers receiving credit',
        name8: 'Value of Credit to farmers',
        name9: 'Savings Account',
        name10: 'APY',
        name11: 'Insurance',
        name12: 'BC Agents',
        dashName: 'Vimo'
    }
    const image = '../assets/img/VEMO.png'
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

     res.render('MBSdash', { data, donut1, donut2, donut3, image})
})


module.exports = router
