const mongoose = require('mongoose');

// Define a schema for your MongoDB collection
const disbursementSchema = new mongoose.Schema({
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
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  loanAmount: {
    type: Number,
    required: true
  },
  tenure: {
    type: Number,
    required: true
  },
  valueChain: {
    type: String,
    required: true
  },
  WhetherFirstTimeFormalCreditAvailed: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const SCF = mongoose.model('SCF', disbursementSchema);

module.exports = SCF;