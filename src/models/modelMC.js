const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true
  },
  dateOfDisbursement: {
    type: Date,
    required: true
  },
  apartDistrict: {
    type: String,
    required: true
  },
  apartBlock: {
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
  agentCode: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  loanAmount: {
    type: Number,
    required: true
  },
  tenure: {
    type: String,
    required: true
  },
  valueChain: {
    type: String,
    required: true
  },
  firstTimeFormalCredit: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  }
});

const MC = mongoose.model('MC', loanApplicationSchema);

module.exports =MC;