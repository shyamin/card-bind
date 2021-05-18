var express = require('express');
var router = express.Router();

require('../controllers/config/swagger').setup(router);

router.use('/cat', require('./cat'));

module.exports = router;
