const mongoose = require('mongoose');

const iccSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  DateOfAgreement: {
    type: Date,
    required: true
  },
  TenorOfAgreement: {
    type: String,
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
  Name: {
    type: String,
    required: true
  },
  Phone: {
    type: Number,
    required: true
  },
  UniqueCodeNumber: {
    type: String,
      required: true,
    //   unique: true
  },
  
  Gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  ValueChain: {
    type: String,
    required: true
  }
});

const ICC = mongoose.model('ICC', iccSchema);

module.exports = ICC;
