const mongoose = require("mongoose");

const sirDataSchema = new mongoose.Schema({
    slNo: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
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
    FPC: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    rfqsID: {
        type: String,
        required: true
    },
    rfqVolume: {
        type: String,
        required: true
    },
    orderValue: {
        type: Number,
        required: true
    }
});

const SIR = mongoose.model("SIR", sirDataSchema);

module.exports = SIR;

