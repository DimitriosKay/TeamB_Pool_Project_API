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
    winner : String,
    seven_balled : Boolean,
    created_match : {
        type: Date,
        require : true
    },
    finished_match : Date
});

exports.MatchesModel = mongoose.model("Matches", this.MatchesSchema);
