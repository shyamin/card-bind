var router = require('express').Router();
var catMiddeleware = require('../controllers/middleware/cat');

router.get('/bind', catMiddeleware.bindCat);

module.exports = router;
