const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    
  },
  dateOfEnrolment: {
    type: Date,
    
  },
  apartDistrict: {
    type: String,
    
  },
  apartBlock: {
    type: String,
    
  },
  village: {
    type: String,
    
  },
  name: {
    type: String,
    
  },
  AadharPhone: {
    type: Number,
    
  },
  gender: {
    type: String,
   
    
  },
  activeOrDormant: {
    type: String,
    
  },
  firstAvailedInsurance: {
    type: String,
   
  },
});

const VI = mongoose.model('VI', enrollmentSchema);

module.exports = VI;
// exports defaults VI
