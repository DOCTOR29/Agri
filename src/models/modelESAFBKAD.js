const mongoose = require('mongoose');

const accountOpeningSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true,
  },
  accountOpeningDate: {
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
  villageName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  agentCode: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const ESAFBKAD = mongoose.model('ESAFBKAD', accountOpeningSchema);

module.exports = ESAFBKAD;
