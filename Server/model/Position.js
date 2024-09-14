const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    salaryRange: { min: Number, max: Number }
});

module.exports = mongoose.model('Position', PositionSchema);
