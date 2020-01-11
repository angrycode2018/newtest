var express = require('express');
var router = express.Router();

/* GET users listing. */
// Friends made comment
router.get('/', function(req, res, next) {
  console.log(req)
  res.send('This is respond from Express');
});

module.exports = router;
