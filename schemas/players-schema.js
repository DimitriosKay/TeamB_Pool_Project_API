var mongoose = require('mongoose');

exports.PlayersSchema = mongoose.Schema({
  username: {
    type: String,
    require: [true, 'Username required!'],
    unique: [true, 'Username already taken'],
    minlength: [3, 'Username too short'],
    maxlength: 20
  },
  password: {
    type: String,
    require: [true, 'Password required!'],
    minlength: [5, 'Password too short'],
    maxlength: 20
  },
  firstname: {
    type: String,
    require: [true, 'Name required!'],
    unique: [true, 'Name already taken'],
    minlength: [3, 'Name too short'],
    maxlength: 20
  },
  lastname: {
    type: String,
    require: [true, 'Name required!'],
    unique: [true, 'Name already taken'],
    minlength: [3, 'Name too short'],
    maxlength: 20
  },
  games_played: {
    type: Number,
    default: 0
  },
  wins: {
    type: Number,
    default: 0
  },
  loss: {
    type: Number,
    default: 0
  },
  win_rate: {
    type: Number,
    default: 0
  },
  loss_rate: {
    type: Number,
    default: 0
  }
});

exports.PlayersModel = mongoose.model('Players'),
  this.PlayersSchema;
