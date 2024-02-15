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
        card7: 202,
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
router.get('/aggregatem/data', async (req, res) => { 
    var data = {
        card1: 30032,
             card2: 11620,
             card3: 89814000,
             card4: 9900,
             card5: 573,
             card6: 450581000,
             card7: 202,
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
    try {

        const fields = [

        
            { label: 'Total Number of Beneficiaries', value: 'card1' },
            { label: 'Number of FPOs receiving credit', value: 'card2' },
            { label: 'Credit to FPOs', value: 'card3' },
            { label: 'Number of VLEs receiving credit', value: 'card4' },  
            { label:'Value of VLEs credit', value: 'card5' },
            { label:'Number of Individual farmers receiving Credit', value: 'card6' },
            { label:'Value of credit to individual farmers', value: 'card7' },
            { label: 'Number of savings account opened', value: 'card8' },
            { label: 'Number of APY', value: 'card9' },
            { label: 'Number of Insurance', value: 'card10' },
            { label: 'Value of transactions facilitated', value: 'card11' },
            { label: 'Number of BC agents', value: 'card12' }
          
    
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




module.exports = router