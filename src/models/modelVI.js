const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  slNo: {
    type: Number,
    required: true,
  },
  dateOfEnrolment: {
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
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  activeOrDormant: {
    type: String,
    required: true,
  },
  firstAvailedInsurance: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
});

const VI = mongoose.model('VI', enrollmentSchema);

module.exports = VI;
// exports defaults VI
