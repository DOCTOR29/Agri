const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  NameOfFPC: {
    type: String
  },
  DateOfDisbursement: {
    type: Date,
    required: true
  },
  DisbursementAmount: {
    type: Number,
    required: true
  },
  APARTDistrict: {
    type: String
  },
  APARTBlock: {
    type: String
  },
  Village: {
    type: String
  },
  CIN: {
    type: String
  },
  LoanAmount: {
    type: Number,
    required: true
  },
  Tenure: {
    type: String
  },
  Validity: {
    type: Date
  },
  ValueChain: {
    type: String
  }
});

const SCFP = mongoose.model('SCFP', loanSchema);

module.exports = SCFP;