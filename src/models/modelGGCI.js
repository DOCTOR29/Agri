const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true,
  },
  dateOfDisbursement: {
    type: Date,
    required: true,
  },
  apartDistrict: {
    type: String,
    required: true,
  },
  apartBlock: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  agentCode: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  tenure: {
    type: Number,
    required: true,
  },
  valueChain: {
    type: String,
    required: true,
  },
  firstTimeFormalCreditAvailed: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
  loanType: {
    type: String,
    required: true,
  },
});

const GGCI = mongoose.model('GGCI', yourSchema);

module.exports = GGCI;
