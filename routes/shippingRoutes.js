const express = require('express');
const router = express.Router();
const shippingController = require('../controller/shippingController');

router.post('/shipping-cost', shippingController.calculateShippingCost);

module.exports = router;