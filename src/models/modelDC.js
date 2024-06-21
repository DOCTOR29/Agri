const mongoose = require("mongoose");

const dehaatConsolidatedScheme = new mongoose.Schema({

    dateOfOnboarding: { type: Date, required: true },
    apartDistrict: { type: String, required: true },
    apartBlock: { type: String, required: true },
    village: { type: String, required: true },
    nameOfFPC: { type: String, required: true },
    focusCommodity: { type: String, required: true },
    detailAddress: { type: String, required: true },
    memberMale: { type: Number, required: true },
    memberFemale: { type: Number, required: true },
    totalMembers: { type: Number, required: true },
    registrationYear: { type: Number, required: true },
    cin: { type: String, required: true },
    villagesCovered: { type: Number, required: true },
    valueChains: { type: String, required: true }
});

const DC = mongoose.model("DC", dehaatConsolidatedScheme);

module.exports = DC;
