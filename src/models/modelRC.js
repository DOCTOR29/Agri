const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
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
  Age: {
    type: Number,
    required: true
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female'],
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
  FirstTimeCreditAvailed: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  }
});

const RC = mongoose.model('RC', loanSchema);

module.exports = RC;
