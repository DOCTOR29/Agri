const mongoose = require('mongoose');

const enrolmentSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true,
  },
  dateOfEnrolment: {
    type: Date,
    required: true,
  },
  district: {
    type: Number,
    required: true,
  },
  block: {
    type: Number,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  agentCode: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  activeDormant: {
    type: String,
    enum: ['Active', 'Dormant'],
    required: true,
  },
  firstTimeAccountOpened: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
});

const ESAFAPY = mongoose.model('ESAFAPY', enrolmentSchema);

module.exports = ESAFAPY;
