const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  SLNo: {
    type: Number,
    required: true
  },
  DateOfOpening: {
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
  Village: {
    type: String,
    required: true
  },
  AgentName: {
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
  ActiveInactive: {
    type: String,
    enum: ['Active', 'Inactive'],
    required: true
  }
});

const FO = mongoose.model('FO', accountSchema);

module.exports = FO; 
