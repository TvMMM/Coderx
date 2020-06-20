var express = require('express');

var controller = require('../controller/product.controller');
var authMiddleware = require('../middleware/auth.middleware');

var router = express.Router();

router.get('/', authMiddleware.requireAuth, controller.index);

router.get('/search')

module.exports = router;