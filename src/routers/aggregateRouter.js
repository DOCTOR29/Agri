const express = require('express')
const router = express.Router()
const json2csv = require('json2csv').parse


const countName = async function (varr) {
    const varr1 = require(`../models/model${varr}`)
    const formMB = await varr1.find()
    var num = 0
    formMB.forEach(element => {
       num++
    });
    return num
}
const totalFarmerEF = async function (varr) {
    const varr1 = require(`../models/model${varr}`)
    const formMB = await varr1.find()
    var num = 0
    formMB.forEach(element => {
       num+=element.TotalFarmers
    });
    return num
}
const DisbursementAmount = async function () {
    const varr1 = require(`../models/modelSCFP`)
    const formSCFP = await varr1.find()
    var num = 0
    formSCFP.forEach(element => {
       num+=element.DisbursementAmount
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


router.get('/aggregate/data', async (req, res) => {
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
        name7: 'Banking Outlets/ BCs Opened',
        dashName: 'Aggregate'
    }
    // const formSCFP = await formSCFP.find();
    //         var num = 0
    //         formSCFP.forEach(element => {
                
    //            num += element.DisbursementAmount
    //         });
    data.card7 = await countName('FO') + await countName('MD')
    data.card2 = await countName('FS')
    // const test =await sumLoan('DF')
    // console.log(test)
    data.card3 = await sumLoan('DF')//
   
    + await sumLoan1('EF')//
    // + await sumLoan('GGCF')
    + await DisbursementAmount() //
    + await sumLoan1('VC')//
    // + await sumLoan1('SCV')
    // + await sumLoan('SCF')
    + await sumLoan1('FC')//
    + await sumLoan('MC')//
    // + await sumLoan('GGCI')

    // + await sumLoan('DFFarmers')
    // + await sumLoan1('EFP')
    + await sumLoan1('RC')//
    
    // + await sumLoan1('RC')
    data.card4 = await countName('VI') 
                 + await countName('EI') 
                 + await countName('FI') 
        + await countName('DInsurance') 
    data.card5 = await countName('FA') 
                + await countName('EA') 
    data.card6 = await transactionData('FT')
        + await transactionData('MTR')
    data.card1 =
    + await countName('FS')// 
       + await countName('MB')//
        + data.card4//
        + data.card5//
        + await countName('SCF')
        + await countName('FC')//
        + await countName('MC')//
        // + await countName('GGCF')
        + await countName('DF')
        + await countName('RC')//
        + await totalFarmerEF('EF')
    
        try {
            const fields = [
            
                

               
                { label: 'Total Beneficiaries', value: 'card1' },
                { label: 'Savings Account Opened', value: 'card2' },
                { label: 'Credit Disbursed', value: 'card3' },
                { label: 'Insurance Policy Issued', value: 'card4' },
                { label: 'Social Security Schemes', value: 'card5' },
                { label: 'Digitization (Trnx in Lacs)', value: 'card6' },
                { label: 'Banking Outlets/ BCs Opened', value: 'card7' },
                
        
            ]
           
            const csv = json2csv(data, {fields});
            // req.flash('message', 'Download Success')
            res.attachment(`${data.dashName}.csv`).send(csv)
            // res.redirect('/ci')
        } catch (error) {
            console.log(error)
            res.status(500).send()
        }
 })

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
        name7: 'Banking Outlets/ BCs Opened',
        dashName: 'Aggregate'
    }
    // const formSCFP = await formSCFP.find();
    //         var num = 0
    //         await formSCFP.forEach(element => {
                
    //            num += element.DisbursementAmount
    //         });
    data.card7 = await countName('FO') + await countName('MD')
    data.card2 = await countName('FS') 
//     const test = await sumLoan('MC')
// const test1 = await sumLoan('DF')//
   
//         const test2 = await sumLoan1('EF')//
//         // + await sumLoan('GGCF')
//         const test3 = await DisbursementAmount() //
//         const test4 = await sumLoan1('VC')//
//         // + await sumLoan1('SCV')
//         // + await sumLoan('SCF')
//         const test5 = await sumLoan1('FC')//
//         const test6 = await sumLoan('MC')//
//         // + await sumLoan('GGCI')
    
//         // + await sumLoan('DFFarmers')
//         // + await sumLoan1('EFP')
//         const test7 = await sumLoan1('RC')//
//     await console.log(test1, test2, test3, test4, test5, test6, test7);
    data.card3 = await sumLoan('DF')//
   
        + await sumLoan1('EF')//
        // + await sumLoan('GGCF')
        + await DisbursementAmount() //
        + await sumLoan1('VC')//
        // + await sumLoan1('SCV')
        // + await sumLoan('SCF')
        + await sumLoan1('FC')//
        + await sumLoan('MC')//
        // + await sumLoan('GGCI')
    
        // + await sumLoan('DFFarmers')
        // + await sumLoan1('EFP')
        + await sumLoan1('RC')//
        
        // + await sumLoan1('RC')
    
    data.card4 = await countName('VI') 
                 + await countName('EI') 
                 + await countName('FI') 
        + await countName('DInsurance') 
    data.card5 = await countName('FA') 
                + await countName('EA') 
    data.card6 = await transactionData('FT')
        + await transactionData('MTR')
    data.card1 =
        + await countName('FS')// 
       + await countName('MB')//
        + data.card4//
        + data.card5//
        + await countName('SCF')
        + await countName('FC')//
        + await countName('MC')//
        // + await countName('GGCF')
        + await countName('DF')
        + await countName('RC')//
        + await totalFarmerEF('EF')
    console.log(data.card1)
    res.render('aggregateDash', {data})
})




module.exports = router