var express = require('express');
const path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/survey', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/home.html'));
});

module.exports = router;