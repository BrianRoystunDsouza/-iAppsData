const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    position: { type: mongoose.Schema.Types.ObjectId, ref: 'Position' },
    salary: { type: Number },
    benefits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Benefit' }],
    leaveBalance: { type: Number, default: 20 },
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }]
});

module.exports = mongoose.model('Employee', EmployeeSchema);
