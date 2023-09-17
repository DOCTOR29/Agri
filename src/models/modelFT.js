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

const FT = mongoose.model('FT', cashFlowSchema);

module.exports = FT;