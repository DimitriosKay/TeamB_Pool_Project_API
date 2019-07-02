let express = require('express');
let router = express.Router();
let Player = require('../schemas/player-schema');
let paramHandler = require('../handlers/param-handler');
let utils = require('../utils');


router.delete('/deletePlayer',
(req, res, next) => paramHandler(req, res, ['username'], next),
async () => {
    try {
        const username = req.query.username;
        try {
            await Player.PlayerModel.findAndDelete(username);
            res.status(204).send();
        } catch (exc) {
            next(exc);
        }
    } catch (exc) {
        next({ message: exc.message });
        return;
    }
});
