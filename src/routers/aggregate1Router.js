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
const countFemale = async function (varr) {
    const varr1 = require(`../models/model${varr}`)
    const formMB = await varr1.find()
    var num = 0
    formMB.forEach(element => {
        if (element.Gender === 'Female' || element.Gender === 'female')
            num++;
        if (element.gender === 'Female' || element.gender === 'female')
            num++;
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

router.get('/aggregate1/data', async (req, res) => { 
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
        card13: 0,
    
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
        name13: 'Female Beneficiaries',
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
    
    card13 = await countFemale('SCF')
    + await countFemale('FC')
    + await countFemale('MC')
    + await countFemale('GGCI')
    + await countFemale('DFFarmers')
    + await countFemale('EFP')
        + await countFemale('RC')
       + await countFemale('MB')
        + await countFemale('FS') +
        await countFemale('FA') + await countFemale('EA')
    +await countFemale('VI') 
    + await countFemale('EI') 
    + await countFemale('FI') 
+ await countFemale('DInsurance') 
       
    data.card8 = await countName('MB')
        + await countName('FS') 
    data.card9 = await countName('FA') + await countName('EA')
    data.card11 = await transactionData('FT')
        + await transactionData('MTR')
    data.card12 = await countName('FO') + await countName('MD')
    
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
        card13: 0,
    
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
        name13: 'Female Beneficiaries',

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
        + await transactionData('MTR')
    data.card12 = await countName('FO') + await countName('MD')
    data.card13 = await countFemale('SCF')
    + await countFemale('FC')
    + await countFemale('MC')
    + await countFemale('GGCI')
    + await countFemale('DFFarmers')
    + await countFemale('EFP')
        + await countFemale('RC')
       + await countFemale('MB')
        + await countFemale('FS') +
        await countFemale('FA') + await countFemale('EA')
    +await countFemale('VI') 
    + await countFemale('EI') 
    + await countFemale('FI') 
+ await countFemale('DInsurance') 
    res.render('aggregateDash1', { data })
    
})




module.exports = router