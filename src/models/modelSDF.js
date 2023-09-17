const mongoose = require('mongoose');

// Define a schema for your MongoDB collection
const onboardingSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true
  },
  dateOfOnboarding: {
    type: Date,
    required: true
  },
  apartDistrict: {
    type: String,
    required: true
  },
  apartBlock: {
    type: String,
    required: true
  },
  nameOfFPOFPC: {
    type: String,
    required: true
  },
  iffpcCIN: {
    type: String,
    required: true
  },
  focusCommodity: {
    type: String,
    required: true
  },
  memberMale: {
    type: Number,
    required: true
  },
  memberFemale: {
    type: Number,
    required: true
  },
  registrationYear: {
    type: Number,
    required: true
  }
});

// Create a model based on the schema
const SDF = mongoose.model('SDF', onboardingSchema);

module.exports = SDF;