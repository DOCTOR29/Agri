const express = require('express')
const router = express.Router()
// const 

router.get('/aggregate', (req, res) => {
    var data = {
        card1: 0,
        card2: 0,
        card3: 0,
        card4: 0,
        card5: 0,
        card6: 0,
        card7: 0,
        name1:'Total Beneficiaries',
        name2:'Savings Account Opened',
        name3:'Credit Disbursed',
        name4:'Insurance Policy Issued',
        name5:'Social Security Schemes',
        name6:'Digitization (Trnx in Lacs)',
        name7:'Banking Outlets/ BCs Opened',
    }
    res.render('aggregateDash', {data})
})

module.exports = router