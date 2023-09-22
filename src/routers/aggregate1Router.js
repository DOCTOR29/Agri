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
router.get('/aggregate1', async (req, res) => {
    var data = {
        card1: 0,
        card2: 0,
        card3: 0,
        card4: 0,
        card5: 0,
        card6: 0,
        card7: 0,
        card8: 0,
        card9: 0,
        card10: 0,
        card11: 0,
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
    
    data.card2 = await countName('DF')
                + await countName('EFP') 
                + await countName('GGFPO') 
                + await countName('SCFP') 
                + await countName('VC') 
                + await countName('SCF') 
    data.card3 = await sumLoan('DFFarmers')
        + await sumLoan1('EF')
        + await sumLoan('GGCF')
        + await sumLoan1('SCFP')
        + await sumLoan1('VC')
        + await sumLoan('SCF')
        
    data.card4 = await countName('SCV')
    data.card5 = await sumLoan1('SCV')
    data.card10 = await countName('VI') 
                 + await countName('EI') 
                 + await countName('FI') 
        + await countName('DInsurance') 
    
    data.card9 = await countName('FA') 
                + await countName('EA') 
    data.card6 = await countName('SCF')
                + await countName('FC')
                + await countName('MC')
                + await countName('GGCI')
                + await countName('DFFarmers')
                + await countName('EFP')
                + await countName('RC')
    
    data.card7 = await sumLoan('SCF')
                + await sumLoan1('FC')
                + await sumLoan('MC')
                + await sumLoan('GGCI')
                + await sumLoan('DFFarmers')
                + await sumLoan1('EFP')
                + await sumLoan1('RC')
    data.card1 = data.card6
                 + data.card8
                    + data.card9
                    + data.card10
       
    data.card8 = await countName('MB')
        + await countName('FS') 
    data.card9 = await countName('FA') + await countName('EA')
    data.card11 = await transactionData('FT')
        + await transactionData('MT')
    res.render('aggregateDash1', {data})
})




module.exports = router