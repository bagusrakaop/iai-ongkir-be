const express = require('express');
const router = express.Router();
const provinceController = require('../controller/provinceController');

router.get('/provinces', provinceController.getAllProvinces);
router.get('/provinces/:id', provinceController.getProvinceById);

module.exports = router;