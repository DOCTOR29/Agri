const mongoose = require('mongoose');

const enrolmentSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  DateOfEnrolment: {
    type: Date,
    required: true
  },
  District: {
    type: String,
    required: true
  },
  Block: {
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
  Age: {
    type: Number,
    required: true
  },
  AgentCode: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  ActiveDormant: {
    type: String,
    enum: ['Active', 'Dormant'],
    required: true
  },
  WhetherFirstTimeAccountOpened: {
    type: String,
    enum: ['Yes', 'No'],
    required: true
  }
});

const FA = mongoose.model('FA', enrolmentSchema);

module.exports = FA;
