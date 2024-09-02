
const mongoose = require('mongoose');

const modelDFSSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    typeOfFinancingSupport: {
        type: String,
        required: true
    },
    APARTDistrict: {
        type: String,
        required: true
    },
    APARTBlock: {
        type: String,
        required: true
    },
    village: {
        type: String,
        required: true
    },
    nameOfFPOFPC: {
        type: String
    },
    CINofFPC: {
        type: String
    },
    amountOfFinancingSupport: {
        type: Number,
        required: true
    },
    financingSupportPartner: {
        type: String
    },
    documentForEvidencing: {
        type: String
    },
    valueChain: {
        type: String
    },
    remarks: {
        type: String
    }
});

const DFSF = mongoose.model('DFSF', modelDFSSchema);

module.exports = DFSF;

