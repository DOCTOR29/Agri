const mongoose = require('mongoose');

// Define a schema for your MongoDB collection
const trainingSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
    required: true
  },
  DateOfTraining: {
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
  TrainingProvidedByKalgudiSamunnati: {
    type: String,
    required: true
  },
  FPOFPCName: {
    type: String,
    required: true
  },
  NumberOfBODsCEOsTrained: {
    type: Number,
    required: true
  }
});

// Create a model based on the schema
const ST = mongoose.model('ST', trainingSchema);

module.exports = ST;