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
  APARTBlock: {
    type: String,
    required: true
  },
  Village: {
    type: String,
    required: true
  },
  AgentName: {
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

const EE = mongoose.model('EE', trainingSchema);

module.exports = EE;
