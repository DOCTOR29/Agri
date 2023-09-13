const mongoose = require('mongoose');

const fpcSchema = new mongoose.Schema({
  slNo: Number,
  date: Date,
  district: String,
  block: String,
  village: String,
  nameOfFPC: String,
  focusCommodity: String,
  detailAddressOfFPC: String,
  memberMale: Number,
  memberFemale: Number,
  totalMembers: Number,
  registrationYear: Number,
  corporateIdentificationNumber: Number,
  villagesCovered: Number,
  officialMailId: {
    type: String,
    validate: {
      validator: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),
      message: 'Invalid email address',
    },
  },
  ceoInPlace: {
    type: String,
    enum: ['Yes', 'No'],
  },
  ceoName: String,
  ceoContactInfo: String,
  bankAccount: {
    type: String,
    enum: ['Yes', 'No'],
  },
  bankName: String,
  branchName: String,
  accountType: String,
  landArea: String,
});

const GGFPO = mongoose.model('GGFPO', fpcSchema);

module.exports = GGFPO;
