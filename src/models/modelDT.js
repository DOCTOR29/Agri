const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  dateOfTraining: {
    type: Date,
    required: true
  },
  aaprtDistrict: {
    type: String,
    required: true
  },
  aaprtBlocks: {
    type: String,
    required: true
  },
  villages: {
    type: String,
    required: true
  },
  topicsCovered: {
    type: String,
    required: true
  },
  numberOfAttendees: {
    type: Number,
    required: true
  }
});

const DT = mongoose.model('DT', trainingSchema);

module.exports = DT;
