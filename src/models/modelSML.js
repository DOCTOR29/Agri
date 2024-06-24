const mongoose = require('mongoose');

// Define a schema for your MongoDB collection
const yourSchemaName = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  Date: {
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
  FPC: {
    type: String,
    required: true
  },
  Product: {
    type: String,
    required: true
  },
  SKUs: {
    type: String,
    required: true
  },
  RFQsGenerated: {
    type: String,
    required: true
  },
  OrderVolume: {
    type: String,
    required: true
  },
  OrderValue: {
    type: Number,
    required: true
  }
});

// Create a model based on the schema
const SML = mongoose.model('SML', yourSchemaName);

module.exports = SML;