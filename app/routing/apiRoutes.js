var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/friends', function(req, res, next) {
  res.send('send data file as json');
});

router.post('/friends', (req, res, next) => {
  res.send('do file calc')
});

module.exports = router;