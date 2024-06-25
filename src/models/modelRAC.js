const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: { type: Date, required: true },
  apartDistrict: { type: String, required: true },
  apartBlock: { type: String, required: true },
  village: { type: String, required: true },
  nameOfFPC: { type: String, required: true },
  amountOfSeedsDistributed: { type: Number, required: true },
  areaCovered: { type: Number, required: true }
});

const RAC = mongoose.model('RAC', schema);

module.exports = RAC;
