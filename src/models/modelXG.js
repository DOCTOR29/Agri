const mongoose = require('mongoose');

const gradingSchema = new mongoose.Schema({
    SNo: {
        type: Number,
        required: true
    },
    FPC: {
        type: String,
        required: true
    },
    DateOfGrading: {
        type: Date,
        required: true
    },
    Grade: {
        type: String,
        required: true
    },
    GradingScore: {
        type: Number,
        required: true
    }
});

const XG = mongoose.model('XG', gradingSchema);

module.exports = XG;
