const mongoose = require('mongoose');

const disbursementSchema = new mongoose.Schema({
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
  villageName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  branchCSP: {
    type: String,
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  tenure: {
    type: String,
    required: true,
  },
  valueChain: {
    type: String,
    required: true,
  },
});

const ESAFJL = mongoose.model('ESAFJL', disbursementSchema);

module.exports = ESAFJL;
