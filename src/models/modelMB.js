const mongoose = require('mongoose');

const yourSchemaName = new mongoose.Schema({
  "SlNo": Number,
   "AccountOpeningDate": Date,
   "APARTDistrict": String,
   "APARTBlock": String,
   "Village": String,
   "Name": String,
   "Age": Number,
   "AgentCode": String,
   "Gender": String,
   "ExitingBankAccount": String,
   "SavingsAccountNumber": Number,
   "BankName": String
});

const MB = mongoose.model('MB', yourSchemaName);

module.exports = MB;
