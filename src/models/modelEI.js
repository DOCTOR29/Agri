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
    type: String,
    required: true
  },
  APARTBlocks: {
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
  Age: {
    type: Number,
    required: true
  },
  AgentCode: {
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
    enum: ['General', 'Life', 'Crop'],
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

const EI = mongoose.model('EI', insuranceSchema);

module.exports = EI;
