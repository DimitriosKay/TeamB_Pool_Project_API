var mongoose = require('mongoose');

exports.MatchesSchema = mongoose.Schema({
    player1 : {
        type : String,
        require : true
    },
    player2 : {
        type : String,
        require : true
    },
    player1_win : Boolean,
    player1_lose : Boolean,
    player2_win : Boolean,
    player2_lose : Boolean,
    player1_7balled : Boolean,
    player2_7balled : Boolean,
    created_match : {
        type: Date,
        require : true
    },
    finished_match : Date
});

exports.MatchesModel = mongoose.model("Matches", this.MatchesSchema);