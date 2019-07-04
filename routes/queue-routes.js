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
    const newQueue = new Queues.queueModel(req.body);
    return newQueue.save().then(
        doc => res.status(201).send(doc),
        error => next(error)
    );
});

router.delete('/deleteQueue',
    (req, res, next) => paramHandler(req, res, ['id'], next), async (req, res) => {
        try {
            const { id } = req.query;
            const idObj = utils.toObjectId(id);
            await Queues.queueModel.deleteOne({ "_id": idObj });
            return res.status(204).send();
        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;