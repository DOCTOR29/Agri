const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  AccountOpeningDate: {
    type: Date,
    required: true
  },
  APARTDistrict: {
    type: String,
    required: true
  },
  Block: {
    type: String,
    required: true
  },
  APARTBlock: {
    type: String,
    enum: ['Y', 'N'],
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
  SavingsAccountNumber: {
    type: Number
  },
  BankName: {
    type: String
  },
  WhetherFirstTimeAccountOpened: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  }
});

const IS = mongoose.model('IS', accountSchema);

module.exports = IS;
