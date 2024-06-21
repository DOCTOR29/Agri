const mongoose = require("mongoose");

const samunnatiDataSchema = new mongoose.Schema({
    baseProductId: { type: String, required: true },
    baseProductName: { type: String, required: true },
    varietyId: { type: String, },
    varietyName: { type: String,  },
    ownerFirstName: { type: String, required: true },
    ownerProfileKey: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    productLevel3Title: { type: String, required: true },
    createdTS: { type: Date, required: true },
    lut: { type: Date, required: true },
    productLevel2Title: { type: String, required: true },
    productLevel1Title: { type: String, required: true },
    isPublished: { type: Boolean, default: false },
    isBulkOrder: { type: Boolean, default: false },
    isForReview: { type: Boolean, default: false },
    mrp: { type: Number, required: true },
    pricePerUnit: { type: Number, required: true },
    manufacturerLocation: { type: String, required: true },
    attachments: { type: String },
    tradeSpecifications: { type: String }
});

const SD = mongoose.model("SD", samunnatiDataSchema);

module.exports = SD;
