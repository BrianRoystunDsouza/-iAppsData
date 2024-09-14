
exports.DashboardDetails = async (req, res) => {
    try {
        const result = await allrecords();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.employee = async (req, res) => {
    try {
        const Employee = require('../model/employee');
        const Department = require('../model/Benefit')
        const employees = await Employee.find().populate('benefits')
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.departments = async (req, res) => {
    try {
        const Department = require('../model/Department');

        const result = await Department.find();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.leaves = async (req, res) => {
    try {
        const Leave = require('../model/Leave');
        const Employee = require('../model/employee');

        const result = await Leave.find().populate('employee');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function allrecords() {
    try {
        const Attendance = require("../model/Attandence");
        const Benefit = require("../model/Benefit");
        const Department = require("../model/Department");
        const Leave = require("../model/Leave");
        const Position = require("../model/Position");
        const Employee = require("../model/employee");

        const [Employeedata, Departmentdata, Positiondata, Benefitdata, Leavedata, Attendancedata] = await Promise.all([
            Employee.countDocuments(),
            Department.countDocuments(),
            Position.countDocuments(),
            Benefit.countDocuments(),
            Leave.countDocuments(),
            Attendance.countDocuments()
        ]);

        return { Employeedata, Departmentdata, Positiondata, Benefitdata, Leavedata, Attendancedata };

    } catch (error) {
        console.log(error);
        throw new Error("Error While fetching data");
    }
}