var express = require('express');
var router = express.Router();
var Player = require('../schemas/player-schema');

router.delete('/deletePlayer', (req, res, ['username'], next) => {
    
})