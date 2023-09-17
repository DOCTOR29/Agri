const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  DateOfWorkshop: {
    type: Date,
    required: true
  },
  APARTDistricts: {
    type: String,
    required: true
  },
  APARTBlocks: {
    type: String,
    required: true
  },
  Village: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  FCPCIN: {
    type: String,
    required: true
  },
  FPOName: {
    type: String,
    required: true
  },
  NumberOfFarmersTrained: {
    type: Number,
    required: true
  }
});

const VW = mongoose.model('VW', workshopSchema);

module.exports = VW;
