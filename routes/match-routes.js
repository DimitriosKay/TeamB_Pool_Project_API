var express = require("express");
var router = express.Router();
var matchesScheme = require("../schemas/matches-schema");
let paramHandler = require('../handlers/param-handler');
var utils = require('../utils');

router.get("/getMatches", async (req, res) => {
    const matches = await matchesScheme.MatchesModel.find();
    return res.send(matches);
});

router.get("/getMatch", (req, res, next) => paramHandler(req, res, ["username"], next), async (req, res) => {
    try {
        const { username } = req.query;
        const docs = await matchesScheme.MatchesModel.find({ $or: [{ player1: username }, { player2: username }] });
        res.status(200).send(docs);
    } catch (error) {
        console.log(error);
    }
});

router.post("/createMatch", async (req, res, next) => {
    const newMatch = new matchesScheme.MatchesModel(req.body);
    try {
        const doc = await newMatch.save();
        return res.status(201).send(doc);
    }
    catch (error) {
        return next(error);
    }
});

router.delete("/deleteMatch", (req, res, next) => paramHandler(req, res, ["id"], next), async (req, res) => {
    try {
        const { id } = req.query;
        const idObj = utils.toObjectId(id);
        await matchesScheme.MatchesModel.deleteOne({ "_id": idObj });
        return res.status(204).send()
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
