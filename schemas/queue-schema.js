//import mongoose using the require module
var mongoose = require('mongoose')
//define mongoose.Schema as a new variable
var Schema = mongoose.Schema()

//define the schema for the match queue table
var queueSchema = new Schema({
    matchID: {
        type: Number, 
        required: true,
        max: 9999
    },
    queuePos: {
        type: Number,
        required: true, 
        max: 20,
    },
    inPlay: { //only to be true whilst the game described is active, once finished, it will become false
        type: Boolean,
        required: true
    }
})

exports.queueModel = mongoose.nodel("queue"), this.queueSchema