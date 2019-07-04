const mongoose = require('mongoose')
exports.toObjectId = (input) => mongoose.Types.ObjectId(input);
