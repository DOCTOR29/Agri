const mongoose = require('mongoose')

const modelIISchema = new mongoose.Schema({
    slNo: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    apartDistricts: {
        type: String,
        required: true
    },
    blocks: {
        type: String,
        required: true
    },
    apartBlock: {
        type: String,
        required: true
    },
    village: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    agentCode: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    insuranceType: {
        type: String,
        enum: ['General', 'Life', 'Crop'],
        required: true
    },
    insuranceCoverage: {
        type: Number,
        required: true
    },
    firstTimeInsurance: {
        type: String,
        enum: ['Yes', 'No'],
        required: true
    }
})

const II = mongoose.model('II', modelIISchema)

module.exports = II
