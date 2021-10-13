const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({

    name: String,
    amenities: [String],
    numRooms: Number,
    
    rooms: {
        standard: { name: String, price: Number },
        queen: { name: String, price: Number }, 
        king: { name: String, price: Number }    
    },

    weekendDiff: Number

});

module.exports = mongoose.model('Hotel', HotelSchema);


// Develop a software product that manages hotel reservations across a group of hotels of varying
// characteristics. The software must have the following features:
// • Create/Modify User Information
// • Create/Modify Hotel Properties
// o Hotels must include at least:
//  Amenities: gym, spa, pool, business office, WiFi
//  Types of Rooms and number of rooms
//  Price for each room
// • Price should vary based on weekday vs weekend
// o There must be at least 10 different types of hotel properties
// • Create/Modify Reservation information
// • Ability to search based on criteria:
// o Price range
// o Date range
// o Amenities
// o Room availability
// • You must have an intuitive UI/UX
// Your group must decide what language to create this software. Each team will consist of 5 people and your
// group must turn in a writeup of your project with justifications to why your team approached it the way you
// did. There will also be a 15-minute presentation of your project and you must show it’s functionality. 
// {
//     "name": "Hotel Sample 1",
//     "roomTypes": [{
//         _id: "0",
//         typeName: "1 Bed Suite",
//         totalRooms: 75,
//         fee: 100
//     }, {
//         _id: "1",
//         typeName: "2 Bed Suite",
//         totalRooms: "45",
//         fee: "175"
//     }],
//     amenities["gym", "spa", "pool", "business office", "WiFi"]
// }
// The Magnolia All Suites
// Amenities: Pool, Gym, Spa, Business Office
// Number of Rooms: 20
// Room Price per night: $100 - Standard, $150 - Queen, $250 – King
// Weekend Differential: 25% nightly rate surcharge
// The Lofts at Town Centre
// Amenities: Pool, Gym, Business Office
// Number of Rooms: 60
// Room Price per night: $105 - Standard, $120 - Queen, $190 – King




