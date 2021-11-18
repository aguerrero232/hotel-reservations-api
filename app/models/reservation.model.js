const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    _hotelID: String,
    _userID: String,
    room: { name: String, price: Number },  
    start: String,
    end: String,
    price: Number
});

module.exports = mongoose.model('Reservation', ReservationSchema);