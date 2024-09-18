const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
  APARTDistricts: {
    type: String, // Use an array if there can be multiple districts
    required: true
  },
  APARTBlock: {
    type: String,
    required: true
  },
  Village: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: Number,
    required: true
  },
  AdhaarNumber: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  InsuranceType: {
    type: String,
   
    required: true
  },
  InsuranceCoverage: {
    type: Number,
    required: true
  },
  WhetherFirstTimeInsuranceAvailed: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  }
});

const ESCOI = mongoose.model('ESCOI', insuranceSchema);

module.exports = ESCOI;
