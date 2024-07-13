const mongoose = require('mongoose');

const onboardingSchema = new mongoose.Schema({
  SLNo: {
    type: Number,
    required: true
  },
  DateOfOnboarding: {
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
  Name: {
    type: String,
    required: true
  },
  Phone: {
    type: Number,
    required: true
  }
});

const SDiF = mongoose.model('SDiF', onboardingSchema);

module.exports = SDiF;
