var express = require("Express");
var router = express.Router();
var Player = require("../schemas/player-schema");

router.get('/allUsers', (req, res) => {
  return Player.PlayerModel.find().then((doc) => {
    return res.send(doc);
  });
});

router.get('/byUsername', (req, res) => {
  return Player.PlayerModel.find({ username }).then((doc) => {
    return res.send(doc);
  });
});

module.exports = router;
