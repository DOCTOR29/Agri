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
router.get('/aggregatem', async (req, res) => {
    var data = {
   card1: 30032,
        card2: 11620,
        card3: 89814000,
        card4: 9900,
        card5: 573,
        card6: 450581000,
        card7: 0,
        card8:15764,
        name1:'Total Beneficiaries',
        name2:'Savings Account Opened',
        name3:'Credit Disbursed',
        name4:'Insurance Policy Issued',
        name5:'Social Security Schemes',
        name6:'Digitization (Trnx in Lacs)',
        name7: 'Banking Outlets/ BCs Opened',
        name8: 'Female Beneficiaries',
        dashName: 'Aggregate'
    }
    
    
    
    res.render('aggregateDash', {data})
})




module.exports = router