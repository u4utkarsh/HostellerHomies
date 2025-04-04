const express = require('express');
const router = express.Router();
const { EventFundRegister ,getEventFund,getEventFundBtStudentId} = require('../controllers/EventFundController.js');
router.post('/EventFund',EventFundRegister);
router.get('/EventFund/get', getEventFund);
router.get("/EventFund/student/get",getEventFundBtStudentId);
module.exports = router;