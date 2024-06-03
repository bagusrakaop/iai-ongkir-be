const express = require('express');
const router = express.Router();
const courierController = require('../controller/courierController');

router.get('/couriers', courierController.getAllCouriers);  

module.exports = router;
