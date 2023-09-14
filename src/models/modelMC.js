const mongoose = require('mongoose');

const yourSchemaName = new mongoose.Schema({
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
  ExitingBankAccount: {
    type: String,
    required: true
  },
  SavingsAccountNumber: {
    type: Number
  },
  BankName: {
    type: String
  }
});

const MC = mongoose.model('MC', yourSchemaName);

module.exports = MC;
