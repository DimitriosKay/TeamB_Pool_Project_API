var express = require('express');
var router = express.Router();
var Player = require('../schemas/player-schema');
var param = require('../handler/param-handler');
var mongoose = require('mongoose');

router.get('/allUsers', (req, res) => {
  return Player.PlayerModel.find().then((doc) => {
    return res.send(doc);
  });
});

router.get('/byUsername',
  (req, res, next) => param(req, res, ['username'], next),
  (req, res) => {
    const { username } = req.query;
    return Player.PlayerModel.find({ username }).then(
      doc => res.send(doc),
      error => res.send(500).send(error)
    );
});

module.exports = router;
