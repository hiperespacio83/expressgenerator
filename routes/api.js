var express = require('express');
var router = express.Router();

router.use = ('/clients',require('./api/clients'));



module.exports = router;