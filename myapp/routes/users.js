var express = require('express');
var router = express.Router();


// Ohm commit after

router.get('/', function(req, res, next) {
  //* console.log(req)
  res.send('This is respond from Express');
});

module.exports = router;

