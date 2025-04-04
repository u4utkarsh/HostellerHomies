const express = require('express');
const router = express.Router();
const { EventFundRegister ,getEventFund} = require('../controllers/EventFundController.js');
router.post('/EventFund',EventFundRegister);
router.get('/EventFund/get', getEventFund); // Add this line for GET request
module.exports = router;