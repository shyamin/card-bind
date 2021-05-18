var express = require('express');
var router = express.Router();

router.use('/cat', require('./cat'));

module.exports = router;
