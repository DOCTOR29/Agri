
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
  Name: {
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
  WhetherFirstTimeCreditAvailed: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  }
});

const VC = mongoose.model('VC', disbursementSchema);

module.exports = VC;
