const mongoose = require("mongoose");

const beneficiarySchema = new mongoose.Schema({

  noOfBeneficiaries: { type: Number, required: true },
  date: { type: Date, required: true },
  apartDistrict: { type: String, required: true },
  apartBlock: { type: String, required: true },
  village: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  landHolding: { type: String, required: true },
  FPOFPCName: { type: String, required: true },
});

const DB = mongoose.model("DB", beneficiarySchema);

module.exports = DB;
