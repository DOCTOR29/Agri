const mongoose = require('mongoose');

// Define the schema for your MongoDB model
const yourSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true,
  },
  date: {
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
  village: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
});

// Create and export the model
const GGS = mongoose.model('GGS', yourSchema);

module.exports = GGS;
