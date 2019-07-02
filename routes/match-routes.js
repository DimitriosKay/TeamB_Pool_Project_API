var express = require("Express");
var router = express.Router();
var matches = require("../schemas/matches-schema");

router.get("/getMatches", async (req, res) => {
    const matches = matches.MatchesModel.find().then((doc) => {
        return res.send(doc);
    });
});

router.get("/getMatch", (req, res) => {
    let thePlayer = "";

    let id = PlayerSchema.find({player: thePlayer}, player);
});    


router.post("/createMatch", (req, res, next) => {
    const newMatch = new matches.MatchesModel(req.body);
    return newMatch.save().then(
        doc => res.status(201).send(doc),
        error => next(error)
    );
});




