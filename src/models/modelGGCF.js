
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
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
  nameOfFPOFPC: {
    type: String,
    required: true,
  },
  cinOfFPC: {
    type: String,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  tenure: {
    type: Number,
    required: true,
  },
  isFirstTimeLoan: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
  valueChain: {
    type: String,
    required: true,
  },
  loanType: {
    type: String,
    required: true,
  },
});

const GGCF = mongoose.model('GGCF', loanSchema);

module.exports = GGCF;
