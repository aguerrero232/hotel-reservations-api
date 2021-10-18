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


//  {
//         "rooms": [
//                   {
//                 "name": "Standard",
//                 "price": 25,
//                 "numRoomsTotal": 30, 
//                 "numRoomsAvailable": 12
//             },
//             {
//                 "name": "Queen",
//                 "price": 50,
//                 "numRoomsTotal": 20, 
//                 "numRoomsAvailable": 2
//             },
//             {
//                 "name": "King",
//                 "price": 130,
//                 "numRoomsTotal": 10, 
//                 "numRoomsAvailable": 0
//             }
//         ],
//         "amenities": [
//             "Pool"
//         ],
//         "name": "Rio Inn",
//         "numRooms": 50,
//         "weekendDiff": 20
//  }



// //old hotels models db 
// [
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 25
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": -1
//             },
//             "king": {
//                 "name": "King",
//                 "price": -1
//             }
//         },
//         "amenities": [
//             "Pool"
//         ],
//         "_id": "61607735bb4eb7910895214c",
//         "name": "Rio Inn",
//         "numRooms": 50,
//         "weekendDiff": 20,
//         "__v": 0
//     },
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 50
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": -1
//             },
//             "king": {
//                 "name": "King",
//                 "price": -1
//             }
//         },
//         "amenities": [
//             "Pool",
//             "Business Office"
//         ],
//         "_id": "61607780bb4eb7910895214e",
//         "name": "HomeAway Inn",
//         "numRooms": 30,
//         "weekendDiff": 25,
//         "__v": 0
//     },
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 40
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": 60
//             },
//             "king": {
//                 "name": "King",
//                 "price": 80
//             }
//         },
//         "amenities": [
//             "Pool",
//             "Gym"
//         ],
//         "_id": "6160780ebb4eb79108952152",
//         "name": "Sun Palace Inn",
//         "numRooms": 50,
//         "weekendDiff": 25,
//         "__v": 0
//     },
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 30
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": 50
//             },
//             "king": {
//                 "name": "King",
//                 "price": -1
//             }
//         },
//         "amenities": [],
//         "_id": "61607831bb4eb79108952154",
//         "name": "The Comfy Motel Place",
//         "numRooms": 50,
//         "weekendDiff": 10,
//         "__v": 0
//     },
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 25
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": 50
//             },
//             "king": {
//                 "name": "King",
//                 "price": 60
//             }
//         },
//         "amenities": [
//             "Pool"
//         ],
//         "_id": "61607851bb4eb79108952156",
//         "name": "Town Inn Budget Rooms",
//         "numRooms": 150,
//         "weekendDiff": 15,
//         "__v": 0
//     },
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 100
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": 150
//             },
//             "king": {
//                 "name": "King",
//                 "price": 250
//             }
//         },
//         "amenities": [
//             "Pool",
//             "Gym",
//             "Spa",
//             "Business Office"
//         ],
//         "_id": "6160789fbb4eb79108952158",
//         "name": "The Regency Rooms",
//         "numRooms": 20,
//         "weekendDiff": 25,
//         "__v": 0
//     },
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 100
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": 150
//             },
//             "king": {
//                 "name": "King",
//                 "price": 250
//             }
//         },
//         "amenities": [
//             "Pool",
//             "Gym",
//             "Spa",
//             "Business Office"
//         ],
//         "_id": "616078b7bb4eb7910895215a",
//         "name": "The Courtyard Suites",
//         "numRooms": 20,
//         "weekendDiff": 25,
//         "__v": 0
//     },
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 50
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": 75
//             },
//             "king": {
//                 "name": "King",
//                 "price": 90
//             }
//         },
//         "amenities": [
//             "Pool",
//             "Gym"
//         ],
//         "_id": "616078f2bb4eb7910895215c",
//         "name": "Park North Hotel",
//         "numRooms": 100,
//         "weekendDiff": 15,
//         "__v": 0
//     },
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 105
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": 120
//             },
//             "king": {
//                 "name": "King",
//                 "price": 190
//             }
//         },
//         "amenities": [
//             "Pool",
//             "Gym",
//             "Business Office"
//         ],
//         "_id": "61607912bb4eb7910895215e",
//         "name": "The Lofts at Town Centre",
//         "numRooms": 60,
//         "weekendDiff": 35,
//         "__v": 0
//     },
//     {
//         "rooms": {
//             "standard": {
//                 "name": "Standard",
//                 "price": 100
//             },
//             "queen": {
//                 "name": "Queen",
//                 "price": 150
//             },
//             "king": {
//                 "name": "King",
//                 "price": 250
//             }
//         },
//         "amenities": [
//             "Pool",
//             "Gym",
//             "Spa",
//             "Business Office"
//         ],
//         "_id": "6160793abb4eb79108952160",
//         "name": "The Magnolia All Suites",
//         "numRooms": 20,
//         "weekendDiff": 25,
//         "__v": 0
//     }
// ]