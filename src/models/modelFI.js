const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
  SlNo: {
    type: Number,
  
  },
  Date: {
    type: Date,
  
  },
  APARTDistricts: {
    type: String,
  
  },
  APARTBlocks: {
    type: String,
  
  },
  Village: {
    type: String,
  
  },
  Name: {
    type: String,
  
  },
  Age: {
    type: Number,
  
  },
  AgentCode: {
    type: String,
  
  },
  Gender: {
    type: String,
  
  
  },
  InsuranceType: {
    type: String,
     
  },
  InsuranceCoverage: {
    type: Number,
  
  },
  WhetherFirstTimeInsuranceAvailed: {
    type: String,
   
  
  }
});

const FI = mongoose.model('FI', insuranceSchema);

module.exports = FI;
