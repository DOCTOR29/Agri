const mongoose = require('mongoose');

const yourSchemaName = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  DCSCode: {
    type: String,
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
  CashIn: {
    type: Number,
    required: true
  },
  CashOut: {
    type: Number,
    required: true
  }
});

const MT = mongoose.model('MTR', yourSchemaName);

module.exports = MT;
