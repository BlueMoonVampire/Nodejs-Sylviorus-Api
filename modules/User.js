var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userid: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  }
}, { collection: 'dataUser' });

module.exports = mongoose.model('User', UserSchema);
