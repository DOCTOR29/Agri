const mongoose = require("mongoose");

const rfoDataSchema = new mongoose.Schema({
    dateOfOnboarding: {
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
    focusCommodity: {
        type: String,
        required: true
    },
    detailAddress: {
        type: String,
        required: true
    },
    memberMale: {
        type: Number,
        required: true
    },
    memberFemale: {
        type: Number,
        required: true
    },
    totalMembers: {
        type: Number,
        required: true
    }
});

const RFO = mongoose.model("RFO", rfoDataSchema);

module.exports = RFO;
