var express = require("Express");
var router = express.Router();
var matchesScheme = require('../schemas/matches-schema');

router.get("/matches", async (req, res) => {
    const matches = await matchesScheme.MatchesModel.find();
    return res.send(matches);
});

router.post("/createMatch", (req, res, next) => {
    const newMatch = new matchesScheme.MatchesModel(req.body);
    return newMatch.save().then(
        doc => res.status(201).send(doc),
        error => next(error)
    );
});

module.exports = router;