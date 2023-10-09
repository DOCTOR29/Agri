const express = require('express')

const router = express.Router()
const GGCF = require('../models/modelGGCF')
const GGCI = require('../models/modelGGCI')
const json2csv = require('json2csv').parse

router.get('/gogreen', async  (req, res) => {
    var data = {
        card13:0,
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
        
        dashName: 'Go Green'
    }

    const image = '../assets/img/goreen.png'
    const offerings = {
        data1: "1. Credit",
        data2: "",
        data3: "",
        data4: "",
        

    }

    const formGGCF = await GGCF.find()
    const formGGCI = await GGCI.find()
    var countMale = 0
    var countFemale = 0
    
    formGGCI.forEach((entry) => {
        data.card7++
        if (entry.gender === 'Male') {
            countMale++ 
        }else
        {countFemale++}
        data.card8 +=entry.loanAmount
    })

    formGGCF.forEach((entry) => {
        data.card1++
        data.card2 += entry.loanAmount
       

    })
    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
        }
    }
    let donut1 = {
        male: countMale,
        female: countFemale,
        name1: 'Male',
        name2: 'Female'

    }

    if (donut1.male === 0 && donut1.female === 0) {
        donut1.male = 100
        donut1.female = 0
        donut1.name1 = 'NA'
        donut1.name2 = 'NA'
        
    }

    const donut2 = {
        data1: 100,
        data2: 0,
        name1: 'NA',
        name2: "NA"
    }
    const donut3 = {
        data1: data.card2,
        data2: data.card8,
        // data1: 0  ,
        // data2: 0  ,
        name1: 'Ratio of Value of Credit to FPO',
        name2: 'Value of credit to individual farmers'
    }

    if (donut3.data1 === 'NA' && donut3.data2 === 'NA') {
        donut3.data1 = 100
        donut3.data2 = 0
        donut3.name1 = 'NA'
        donut3.name2 = 'NA'
    
        
    }

    for (const key in data) {
        if (data[key] === 0) {
            data[key] = 'NA'
            
        }
    }





    res.render('MBSdash', { offerings,data, donut1, donut2, donut3, image})
})
// needs doing
// router.get('/form/data', async (req, res) => {

//     const formGGCI = await GGCI.find()
//     const formGGCF = await GGCI.find()


//     var sumLoanAmount = 0
//     var sumLoanAmountFPO = 0

//     formGGCF.forEach((entry) => {

//         sumLoanAmount += entry.loanAmount
//     })

//     formGGCI.forEach((entry) => {
//         sumLoanAmountFPO += entry.loanAmount

//     })

//     var countMale = 0, countFemale = 0

//     formGGCI.forEach((form) => {
//         if(form.gender ==='Male')
//         { countMale++ }
//         else {
//             countFemale++
//         }

//     });



//     const benefeciaries = {
//         male: countMale , female: countFemale , sumLoanAmountFPO  , sumLoanAmount 
//     }

//     res.send(benefeciaries)
// })

router.get('/gogreen/data', async (req, res) => { 
    var data = {
        card13:0,
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
        
        dashName: 'Go Green'
    }

    
    const formGGCF = await GGCF.find()
    const formGGCI = await GGCI.find()
    var countMale = 0
    var countFemale = 0
    
    formGGCI.forEach((entry) => {
        data.card7++
        if (entry.gender === 'Male') {
            countMale++ 
        }else
        {countFemale++}
        data.card8 +=entry.loanAmount
    })

    formGGCF.forEach((entry) => {
        data.card1++
        data.card2 += entry.loanAmount

    })
    
    const donut1 = {
        male: countMale,
        female: countFemale,

    }
    const donut2 = {
        data1: 100,
        data2: 0,
        name1: 'NA',
        name2: "NA"
    }
    const donut3 = {
        data1: data.card2,
        data2: data.card8,
        name1: 'Ratio of Value of Credit to FPO',
        name2: 'Value of credit to individual farmers'
    }
    // for (const key in data) {
    //     if (data[key] === 0) {
    //         data[key] = 'NA'
           
    //     }
    // }
    
try {
    const fields = [
        { label: 'Transaction', value: 'card13' },
        { label: 'Number of FPO Receiving Credit', value: 'card1' },
        { label: 'Value of Credit to FPOs', value: 'card2' },
        { label: 'Number of VLEs receiving credit', value: 'card3' },
        { label: 'Value of Credit received by VLES', value: 'card4' },
        { label: 'Number of FIGs receiving credit', value: 'card5' },
        { label: 'Value of credit to FIGs', value: 'card6' },
        { label: 'Farmers receiving credit', value: 'card7' },
        { label: 'Value of Credit to farmers', value: 'card8' },
        { label: 'Savings Account', value: 'card9' },
        {label: 'APY', value: 'card10' },
        { label: 'Insurance', value: 'card1' },
        { label: 'BC Agents', value: 'card12' }

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
