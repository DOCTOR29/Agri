const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
  dateOfIssuance: {
    type: Date,
    required: true
  },
  insuranceCompany: {
    type: String,
    required: true
  },
  insuranceType: {
    type: String,
    required: true
  },
  aaprtDistrict: {
    type: String,
    required: true
  },
  aaprtBlock: {
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
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  landHolding: {
    type: String,
    required: true
  },
  isFirstTimeInsurance: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  },
  isCropInsurance: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  },
  insurancePremium: {
    type: Number,
    required: true
  },
  insuranceCoverage: {
    type: Number,
    required: true
  }
});

const DI = mongoose.model('DI', insuranceSchema);

module.exports = DI;
