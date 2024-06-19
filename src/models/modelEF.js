const mongoose = require('mongoose');

const disbursementSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  DateOfDisbursement: {
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
  FIGNameOrCode: {
    type: String,
    required: true
  },
  BranchOrCSP: {
    type: String,
    required: true
  },
  LoanAmount: {
    type: Number,
    required: true
  },
  Tenure: {
    type: Number,
    required: true
  },
  ValueChain: {
    type: String,
    required: true
  },
  TotalFarmers: {
    type: Number,
    required: true
  },
  FarmersTakingCreditForFirstTime: {
    type: Number,
    required: true
  },
  FPOName: {
    type: String,
    required: true
  }
});

const EF = mongoose.model('EF', disbursementSchema);

module.exports = EF;
