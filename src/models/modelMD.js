const mongoose = require('mongoose');

const yourSchemaName = new mongoose.Schema({
  SLNo: {
    type: Number,
    required: true
  },
  DateOfRegistration: {
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
    required: true
  },
  ActiveInactive: {
    type: String,
    required: true
  }
});

const md = mongoose.model('md', yourSchemaName);

module.exports = md;
