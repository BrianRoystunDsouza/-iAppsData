const mongoose = require('mongoose');

const BenefitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    value: { type: Number }
});

module.exports = mongoose.model('Benefit', BenefitSchema);
