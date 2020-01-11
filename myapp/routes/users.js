var express = require('express');
var router = express.Router();

//todo GET users listing. */
router.get('/', function(req, res, next) {
  //* console.log(req)
  res.send('This is respond from Express');
});

module.exports = router;

