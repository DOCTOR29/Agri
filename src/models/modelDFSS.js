const mongoose = require('mongoose');
 
const surveySchema = new mongoose.Schema({
  
  noOfFieldsurveysConducted: {
    type: Number,
    required: true
  },
  dateOfSurveyCompletion: {
    type: Date,
    required: true
  },
  apartDistricts: {
    type: String,
    required: true
  },
  apartBlocks: {
    type: String,
    required: true
  },
  village: {
    type: String,
    required: true
  },
  fposCovered: {
    type: Number,
    required: true
  },
  membersCovered: {
    type: Number,
    required: true
  },
  nonMembersCovered: {
    type: Number,
    required: true
  }
});
 
const DFSS = mongoose.model('DFSS', surveySchema);
 
module.exports = DFSS;