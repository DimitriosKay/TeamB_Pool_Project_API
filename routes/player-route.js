var express = require('express');
var router = express.Router();
var playerScheme = require('../schemas/player-schema');
var paramHandler = require('../handlers/param-handler');

var utils = require('../utils');

router.post('/createPlayer', async (req, res, next) => {
    const player = new playerScheme.PlayerModel(req.body);
    try {
        const doc = await player.save();
        return res.status(201).send(doc);
    } catch (error) {
        return next(error);
    }
});

router.get('/allUsers', async (req, res) => {
    const players = await playerScheme.PlayerModel.find();
    return res.send(players);
});

router.get('/byUsername', (req, res, next) => paramHandler(req, res, ['username'], next), async (req, res, next) => {
    try {
        const { username } = req.query;
        const docs = await playerScheme.PlayerModel.findOne({ 'username': username })
        res.status(200).send(docs);
    } catch (error) {
        return next(error);
    }
});

router.put('/updatePlayer', (req, res, next) => paramHandler(req, res, ['username'], next), async (req, res, next) => {
    try {
        const { username } = req.query;
        const docs = await playerScheme.PlayerModel.findOneAndUpdate({ 'username': username }, { $set: req.body }, { new: true, runValidators: true });
        res.status(200).send(docs);
    } catch (error) {
        return next(error);
    }
})

router.delete('/deletePlayer', (req, res, next) => paramHandler(req, res, ['id'], next), async (req, res, next) => {
    try {
        const { id } = req.query;
        const idObj = utils.toObjectId(id);
        await playerScheme.PlayerModel.deleteOne({ '_id': idObj });
        res.status(204).send();
    } catch (exc) {
        next({ message: exc.message });
        return;
    }
});


module.exports = router;
