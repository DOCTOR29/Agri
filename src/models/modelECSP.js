const mongoose = require('mongoose');

const cscSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  CSCOpeningDate: {
    type: Date,
    required: true
  },
  APARTDistrictCSP: {
    type: String,
    required: true
  },
  APARTBlockCSP: {
    type: String,
    required: true
  },
  VillageCSP: {
    type: String,
    required: true
  }
});

const ECSP = mongoose.model('ECSP', cscSchema);

module.exports = ECSP;
