const express = require('express');
const router = express.Router();

const controllerService = require('../controllers/servicesController');

router.get('/', controllerService.index);

module.exports = router;