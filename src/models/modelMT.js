<<<<<<< HEAD
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

const mt = mongoose.model('mt', yourSchemaName);

module.exports = mt;
=======
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

const mt = mongoose.model('mt', yourSchemaName);

module.exports = mt;
>>>>>>> 9b122be9a05292188feadee0db0dbd92d5e54ecf
