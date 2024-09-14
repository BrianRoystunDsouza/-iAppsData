const express = require('express');
const { DashboardDetails, leaves, departments, employee } = require('../Controllers/DashBoard');
const router = express.Router();

router.post('/DashBoardRecords', DashboardDetails);
router.post('/employees', employee);
router.post('/departments', departments);
router.post('/leaves', leaves);


module.exports = router;
