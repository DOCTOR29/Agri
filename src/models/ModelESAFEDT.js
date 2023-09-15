const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true,
  },
  dateOfTraining: {
    type: Date,
    required: true,
  },
  apartDistrict: {
    type: String,
    required: true,
  },
  apartBlock: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  agentName: {
    type: String,
    required: true,
  },
  topicsCovered: {
    type: String,
    required: true,
  },
  numberOfAttendees: {
    type: Number,
    required: true,
  },
});

const ESAFEDT = mongoose.model('ESAFEDT', trainingSchema);

module.exports = ESAFEDT;
