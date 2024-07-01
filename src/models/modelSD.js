const mongoose = require("mongoose");

const samunnatiDataSchema = new mongoose.Schema({
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
    ownerName: {
        type: String,
        required: true
    },
    baseProductName: {
        type: String,
        required: true
    },
    productTitle: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    mrp: {
        type: String,
        required: true
    },
    salesPerUnit: {
        type: String,
        required: true
    },
    manufacturerLocation: {
        type: String,
        required: true
    }
});

const SD = mongoose.model("SD", samunnatiDataSchema);

module.exports = SD;
