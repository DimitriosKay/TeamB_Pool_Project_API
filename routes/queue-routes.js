var express = require('express');
var router = express.Router();
var Queues = require('../schemas/queue-schema');
var paramHandler = require('../handlers/param-handler');
var utils = require('../utils');


router.get('/all', (req, res) => {
    return Queues.queueModel.find().then((doc) => {
        return res.send(doc);
    });
});


router.post('/createQueue', (req, res, next) => {
    const newQueue = new Queues.queueModel.(req.body);
    return newQueue.save().then(
        doc => res.status(201).send(doc),
        error => next(error)
    );
});

router.delete('/deleteQueue',
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

    module.exports = router;