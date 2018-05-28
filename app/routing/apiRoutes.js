const express = require('express');
const router = express.Router();
let friends = require('../data/friends');
const hamming = require('compute-hamming');

/* GET users listing. */
router.get('/friends', function(req, res, next) {
  res.json(friends);
});

router.post('/friends', (req, res, next) => {
  // Get request body
  let { name, photo, ...answers } = req.body;
  // Get just the scores
  let answersArray = Object.values(answers).map(Number);
  // construct user object to push later
  const user = { name, photo, answersArray };
  // invoke a function to compare user and users scores, and return user's friend
  let friend = findFriend(user, friends);
  // push user to api
  friends.push(user);
  // respond to client with friend name and photo
  res.json(friends)
});

const findFriend = (you, friarr) => {
  // get user scores
  let answers = you.answersArray;
  // friend array of object, where we map through it and compare and return a user and score of similarness 
  let scores = friarr.map((friend, i) => [friend.name, friend.photo, hamming(answers, friend.answersArray)]);
  return getTopUser(scores);
}

const getTopUser = (x) => {
  // x is [[user,photo, hamming] ... ] so find the highest hamming and then return the name and photo
  let top;
  x.map(friend => {
    let [user, photo, hamming] = friend;
    !top && (top = friend);
    top[2] < hamming && (top = friend);
  })
  return top;
}


module.exports = router;