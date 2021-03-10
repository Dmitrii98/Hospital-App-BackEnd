const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: String,
  password: String
});

module.exports = User = mongoose.model('users', userSchema)
