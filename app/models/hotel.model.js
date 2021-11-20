const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
    adminId: String,
    name: String,
    amenities: [String],
    numRooms: Number,
    rooms: [{
        name: String,
        price: Number,
        numRoomsTotal: Number,
        numRoomsAvailable: Number
    }],
    weekendDiff: Number
});

module.exports = mongoose.model('Hotel', HotelSchema);