const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    slNo: {
        type: Number,
        required: true
    },
    dateOfRegistration: {
        type: Date,
        required: true
    },
    apartDistrict: {
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
    agentName: {
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
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        required: true
    }
});

const MO = mongoose.model('MO', agentSchema);

module.exports = MO;
