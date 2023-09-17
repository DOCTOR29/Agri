const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  DateOfOpening: {
    type: Date,
    required: true
  },
  APARTDistrict: {
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
  BC_BF_AgentName: {
    type: String,
    required: true
  },
  MobileNumber: {
    type: String,
    required: true
  },
  EmailID: {
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
  ActiveInactive: {
    type: String,
    enum: ['Active', 'Inactive'],
    required: true
  }
});

const IO = mongoose.model('IO', agentSchema);

module.exports = IO;
