const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  SlNo: {
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
  BityaSakhiName: {
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

const VBS = mongoose.model('VBS', accountSchema);

module.exports = VBS;
