const express = require('express')
const router = express.Router()



const countName = async function (varr) {
    const varr1 = require(`../models/model${varr}`)
    const formMB = await varr1.find()
    var num = 0
    formMB.forEach(element => {
       num++
    });
    return num
}
const sumLoan = async function (varr) {
    const varr1 = require(`../models/model${varr}`)
    const formMB = await varr1.find()
    var num = 0
    formMB.forEach(element => {
        
       num += element.loanAmount
    });
    return num
}
const transactionData = async function (varr) {
    const varr1 = require(`../models/model${varr}`)
    const formMB = await varr1.find()
    var num = 0
    formMB.forEach(element => {
        
       num += element.CashIn + element.CashOut
    });
    return num
}
const sumLoan1 = async function (varr) {
    const varr1 = require(`../models/model${varr}`)
    const formMB = await varr1.find()
    var num = 0
    formMB.forEach(element => {
        
       num += element.LoanAmount
    });
    return num
}
router.get('/aggregate1m', async (req, res) => {
    var data = {
        card1: 0,
        card2: 36,
        card3: 21226000,
        card4: 0,
        card5: 0,
        card6: 296,
        card7: 0,
        card8: 0,
        card9: 276,
        card10: 2753,
        card11: 85389000,
        card12: 0,
    
        name1:'Total Number of Beneficiaries',
        name2:'Number of FPOs receiving credit',
        name3:'Credit to FPOs',
        name4:'Number of VLEs receiving credit',
        name5:'Value of VLEs credit',
        name6:'Number of Individual farmers receiving Credit',
        name7:'Value of credit to individual farmers',
        name8: 'Number of savings account opened',
        name9: 'Number of APY',
        name10: 'Number of Insurance',
        name11: 'Value of transactions facilitated',
        name12: 'Number of BC agents',
        dashName: 'Aggregate'
    }
    
    
    res.render('aggregateDash1', {data})
})




module.exports = router