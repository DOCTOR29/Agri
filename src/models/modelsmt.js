const mongoose = require('mongoose');

// Define a schema for your MongoDB collection
const disbursementSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  NameOfFPC: {
    type: String,
    required: true
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
  IfFPCEnterCIN: {
    type: String,
    required: false // This field is optional
  },
  LoanAmount: {
    type: Number,
    required: true
  },
  Tenure: {
    type: Number,
    required: true
  },
  Validity: {
    type: Number,
    required: true
  },
  ValueChain: {
    type: Number,
    required: true
  }
});

// Create a model based on the schema
const smt = mongoose.model('smt', disbursementSchema);

module.exports = smt;