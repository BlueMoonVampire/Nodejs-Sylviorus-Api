const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
