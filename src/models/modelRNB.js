const mongoose = require('mongoose');

const RNBschema = new mongoose.Schema({
    date: {
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
    nameOfFPC: {
        type: String,
        required: true
    },
    nameOfFarmers: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    }
});

module.exports = mongoose.model('RNB', RNBschema);
