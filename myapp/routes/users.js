var express = require('express');
var router = express.Router();

// Freind remove comment
router.get('/', function(req, res, next) {
  //* console.log(req)
  res.send('This is respond from Express');
});

module.exports = router;

