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
  agentCode: {
    type: String,
    required: true,
  },
  gender: {
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
  firstTimeCreditAvailed: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
});

const ESAFGL = mongoose.model('ESAFGL', disbursementSchema);

module.exports = ESAFGL;
