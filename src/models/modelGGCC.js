const mongoose = require('mongoose');

const collectionCentreSchema = new mongoose.Schema({
  dateOfEstablishment: {
    type: Date,
    required: true,
  },
  dateOfClosure: {
    type: Date,
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
  numberOfFarmersAssociated: {
    type: Number,
    required: true,
  },
  fpcOrFpoAssociated: {
    type: String,
    required: true,
  },
  volumeHandledMT: {
    type: Number,
    required: true,
  },
  valueINR: {
    type: Number,
    required: true,
  },
});

const GGCC = mongoose.model('GGCC', collectionCentreSchema);

module.exports = GGCC;
