const express = require('express');
const router = express.Router();
const controller = require('../controllers/saleController');

router.post('/', controller.makeSale);

module.exports = router;