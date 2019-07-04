//import mongoose using the require module
var mongoose = require('mongoose')
//define mongoose.Schema as a new variable
var Schema = mongoose.Schema()

//define the schema for the match queue table
var queueSchema = new Schema({
    playerOneID: {
        type: ObjectId, 
        required: true
    },
    playerTwoID: {
        type: ObjectId,
        required: true
    },
    inPlay: { //only to be true whilst the game described is active, once finished, it will become false
        type: Boolean,
        required: true
    }
})

exports.queueModel = mongoose.model("queue", this.queueSchema);
