var express = require('express');
var router = express.Router();
var Player = require('../schemas/player-schema');


router.post('/createPlayer', (req, res, next) => {
    const newPlayer = new Player.PlayerModel(req.body);
    return newPlayer.save().then(
        doc => res.status (201).send(error)
    );
});

/**
 * This router handles routes under /player.
 * It defines endpoints to create players
 */

module.exports = router;