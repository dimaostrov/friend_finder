var express = require('express');
var router = express.Router();
var friends = require('../data/friends');

/* GET users listing. */
router.get('/friends', function(req, res, next) {
  res.json(friends);
});

router.post('/friends', (req, res, next) => {
  let { name, photo, ...answers } = req.body;
  let answersArray = Object.values(answers);
  const user = { name, photo, answersArray };
  friends.push(user);
  //res.json(friends)
});

module.exports = router;