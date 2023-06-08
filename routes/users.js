var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/',(req,res) => {
  db.query('select * from clientes')
  .then((result)=>{})
  .catch((error)=>{});
});

module.exports = router;
