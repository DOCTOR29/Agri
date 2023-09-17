const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true,
  },
  dateOfWorkshop: {
    type: Date,
    required: true,
  },
  apartDistricts: {
    type: String,
    required: true,
  },
  apartBlocks: {
    type: String,
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
  fcpCIN: {
    type: String,
    required: true,
  },
  fpoName: {
    type: String,
    required: true,
  },
  numberOfFarmersTrained: {
    type: Number,
    required: true,
  },
});

const VI = mongoose.model('VI', workshopSchema);

module.exports = VI;