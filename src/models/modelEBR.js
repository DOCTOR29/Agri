const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  BranchOpeningDate: {
    type: Date,
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
  VILLAGE: {
    type: String,
    required: true
  }
});

const EBR = mongoose.model('EBR', branchSchema);

module.exports = EBR;
