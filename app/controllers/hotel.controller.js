const Hotel = require('../models/hotel.model.js');

// Create and Save a new Hotel
exports.create = (req, res) => {

    // Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "Hotel name can not be empty"
        });
    }

    if (!req.body.rooms) {
        return res.status(400).send({
            message: "Hotel Rooms data can not be empty"
        });
    }

    if (!req.body.numRooms) {
        return res.status(400).send({
            message: "Number of hotel Rooms can not be empty"
        });
    }

    //need to check logic in these files
    
    // Create a Hotel
    const hotel = new Hotel({
        name: req.body.name,
        amenities: req.body.amenities || "N/A",
        numRooms: req.body.numRooms,
        rooms: req.body.rooms,
        weekendDiff: req.body.weekendDiff || 0
    });

    // Save hotel in the database
    hotel.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the hotel."
            });
        });
};

// Retrieve and return all hotels from the database.
exports.findAll = (req, res) => {
    Hotel.find()
        .then(hotels => {
            res.send(hotels);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving hotels."
            });
        });
};

// Find a single hotel with a hotelId
exports.findOne = (req, res) => {
    
    // http://localhost:3000/hotels/6130c423ebe0aa1ec4113875
    // console.log(req.params) // use this for debugging

    Hotel.findById(req.params.hotelId)
        .then(hotel => {
            if (!hotel) {
                return res.status(404).send({
                    message: "Hotel not found with id " + req.params.hotelId
                });
            }
            res.send(hotel);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Hotel not found with id " + req.params.hotelId
                });
            }
            return res.status(500).send({
                message: "Error retrieving hotel with id " + req.params.hotelId
            });
        });

};

// Update a hotel identified by the hotelId in the request
exports.update = (req, res) => {

    // Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "Hotel name can not be empty"
        });
    }

    if (!req.body.rooms) {
        return res.status(400).send({
            message: "Hotel Rooms data can not be empty"
        });
    }

    if (!req.body.numRooms) {
        return res.status(400).send({
            message: "Number of hotel Rooms can not be empty"
        });
    }
    
    // Find hotel and update it with the request body
    Hotel.findByIdAndUpdate(req.params.hotelId, {
            name: req.body.name,
            amenities: req.body.amenities || "N/A",
            numRooms: req.body.numRooms,
            rooms: req.body.rooms,
            weekendDiff: req.body.weekendDiff || 0
        }, {
            new: true
        })
        .then(hotel => {
            if (!hotel) {
                return res.status(404).send({
                    message: "Hotel not found with id " + req.params.hotelId
                });
            }
            res.send(hotel);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Hotel not found with id " + req.params.hotelId
                });
            }
            return res.status(500).send({
                message: "Error updating hotel with id " + req.params.hotelId
            });
        });
};

// Delete a hotel with the specified hotelId in the request
exports.delete = (req, res) => {
    Hotel.findByIdAndRemove(req.params.hotelId)
        .then(hotel => {
            if (!hotel) {
                return res.status(404).send({
                    message: "Hotel not found with id " + req.params.hotelId
                });
            }
            res.send({
                message: "Hotel deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "hotel not found with id " + req.params.hotelId
                });
            }
            return res.status(500).send({
                message: "Could not delete hotel with id " + req.params.hotelId
            });
        });
};