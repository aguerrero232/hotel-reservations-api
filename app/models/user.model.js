const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    reservationIds: [String],
    isAdmin: Number
});

module.exports = mongoose.model('User', UserSchema);