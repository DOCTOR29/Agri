const mongoose = require('mongoose');

const procurementSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  DateOfProcurement: {
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
  Village: {
    type: String,
    required: true
  },
  FarmerName: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  NameOfFPOFPC: {
    type: String,
    required: true
  },
  CIN: {
    type: String
  },
  VolumeOfProcurementMT: {
    type: Number,
    required: true
  },
  ValueOfProcurement: {
    type: Number,
    required: true
  }
});

const RPP = mongoose.model('RPP', procurementSchema);

module.exports = RPP;
