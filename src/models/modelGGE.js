const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true,
  },
  date: {
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
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  firstTimeAvailed: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
});

const GGE = mongoose.model('GGE', yourSchema);

module.exports = GGE;
