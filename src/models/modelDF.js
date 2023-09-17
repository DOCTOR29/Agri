const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  dateOfDisbursement: {
    type: Date,
    required: true
  },
  aaprtDistrict: {
    type: String,
    required: true
  },
  aaprtBlock: {
    type: String,
    required: true
  },
  village: {
    type: String,
    required: true
  },
  nameOfFPOFPC: {
    type: String,
    required: true
  },
  cinOfFPC: {
    type: String
  },
  loanAmount: {
    type: Number,
    required: true
  },
  tenure: {
    type: Number,
    required: true
  },
  isFirstTimeLoan: {
    type: String, // You can also use Boolean if you prefer true/false values
    enum: ['Yes', 'No'], // Only 'Yes' or 'No' are allowed values
    required: true
  },
  valueChain: {
    type: String,
    required: true
  }
});

const DF = mongoose.model('DF', loanSchema);

module.exports = DF;
