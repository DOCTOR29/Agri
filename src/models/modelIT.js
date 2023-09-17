const mongoose = require('mongoose');

const cashFlowSchema = new mongoose.Schema({
  CashIn: {
    type: Number,
    required: true
  },
  CashOut: {
    type: Number,
    required: true
  }
});

const IT = mongoose.model('IT', cashFlowSchema);

module.exports = IT;