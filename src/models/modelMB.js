const mongoose = require('mongoose');

const yourSchemaName = new mongoose.Schema({
  "SlNo": Number,
   "TransactionDate": Date,
   "APARTDistrict": String,
   "APARTBlock": String,
   "Village": String,
   "Name": String,
  
   "AgentCode": String,
   "Gender": String,
   
});

const MB = mongoose.model('MB', yourSchemaName);

module.exports = MB;
