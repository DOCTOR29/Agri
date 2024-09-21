const mongoose = require('mongoose');

const onboardingSchema = new mongoose.Schema({
  SLNo: {
    type: Number,
      },
  DateOfOnboarding: {
    type: Date,

  },
  APARTDistrict: {
    type: String,

  },
  APARTBlock: {
    type: String,
   
  },
  Village: {
    type: String,
    
  },
  Name: {
    type: String,
    
  },
  Phone: {
    type: Number,
    
  }
});

const SDiF = mongoose.model('SDiF', onboardingSchema);

module.exports = SDiF;
