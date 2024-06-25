const mongoose = require("mongoose");

const equipmentDataSchema = new mongoose.Schema({
    submissionDate: {
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
    equipmentName: {
        type: String,
        required: true
    }
});

const RFE = mongoose.model("RFE", equipmentDataSchema);

module.exports = RFE;
