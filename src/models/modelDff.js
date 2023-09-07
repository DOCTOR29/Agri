const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    dateOfDisbursement: {
        type: Date,
        required: true,

    },
    AAPRTDistrict: {
        type: String,
        required: true,
    },
    APARTBlock: {
        type: String,
    
    },
    nameOfFarmer: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        

    },
    whetherAssociatedWithFPOFPC : {
        type: Boolean,
    
    },
    nameOfFPOFPC: {
        type: String,
        required: true,
    },
    CINOfTheFPC: {
        type: String,
        required: true,
    },
    guaranteeProvidedByFPOFPC : {
        type: Boolean,
    
    },
    loanAmount: {
        type: Number,
        required: true,
    },
    tenure: {
        type: Number,
        required: true,
    },
    whetherLoanTakenForFirstTime: {
        type: Boolean, 
    },
    valueChain: {
        type: String
    }
    
})

const DFF = new mongoose.model("DFF", formSchema)

module.exports = DFF;