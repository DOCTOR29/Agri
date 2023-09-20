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
router.get('/aggregate', async (req, res) => {
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
    
    data.card2 = await countName('MB') + await countName('FS') 
    data.card3 = await sumLoan('DFFarmers')
        + await sumLoan1('EF')
        + await sumLoan('GGCF')
        + await sumLoan1('SCFP')
        + await sumLoan1('VC')
        + await sumLoan1('SCV')
        + await sumLoan('SCF')
        + await sumLoan1('FC')
        + await sumLoan('MC')
        + await sumLoan('GGCI')
        + await sumLoan('GGCI')
        + await sumLoan('DFFarmers')
        + await sumLoan1('EFP')
        + await sumLoan1('RC')
    data.card4 = await countName('VI') 
                 + await countName('EI') 
                 + await countName('FI') 
        + await countName('DInsurance') 
    data.card5 = await countName('FA') 
                + await countName('EA') 
    data.card6 = await transactionData('FT')
        + await transactionData('MT')
    data.card1 = data.card2
                 + data.card4
        + data.card5
        + await countName('SCF')
        + await countName('FC')
        + await countName('MC')
        + await countName('GGCF')
        + await countName('DFFarmers')
        + await countName('RC')
        + await countName('EG')
    
    res.render('aggregateDash', {data})
})

module.exports = router