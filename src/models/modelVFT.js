const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  DateOfTraining: {
    type: Date,
    required: true
  },
  APARTDistrict: {
    type: String,
    required: true
  },
  APARTBlocks: {
    type: String,
    required: true
  },
  Villages: {
    type: String,
    required: true
  },
  FPOFPCName: {
    type: String,
    required: true
  },
  TopicsCovered: {
    type: String,
    required: true
  },
  NumberOfAttendees: {
    type: Number,
    required: true
  }
});

const VFT = mongoose.model('VFT', trainingSchema);

module.exports = VFT;
