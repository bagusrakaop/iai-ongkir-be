const express = require('express');
const router = express.Router();
const cityController = require('../controller/cityController');

router.get('/cities', cityController.getAllCities);
router.get('/cities/:id', cityController.getCityById);

module.exports = router;