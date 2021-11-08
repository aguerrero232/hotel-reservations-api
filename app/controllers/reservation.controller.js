const Reservation = require('../models/reservation.model.js');
const Hotel = require('../models/hotel.model.js');

// time range 1
//  x1                             x2
//  /------------------------------|
// time range 2
//                  y1                             y2
//                  |------------------------------|
function intersect(x1, y1, x2, y2) {
    return x1 < y2 && y1 < x2;
}

// Create and Save a new reservation
exports.create = (req, res) => {

    if (!req.body._hotelId) {
        return res.status(400).send({
            message: "Hotel ID is a paramater and can not be empty"
        });
    }

    if (!req.body.room) {
        return res.status(400).send({
            message: "Hotel room can not be empty"
        });
    }

    if (!req.body.start) {
        return res.status(400).send({
            message: "Must submit a start date."
        });
    }

    if (!req.body.end) {
        return res.status(400).send({
            message: "Must submit an end date."
        });
    }

    Hotel.findById(req.body._hotelId).then(hotel => {

        if (!hotel) {
            return res.status(404).send({
                message: "Hotel not found with id " + req.body._hotelId
            });
        }

        // Create a reservation
        const reservation = new Reservation({
            _hotelID: req.body._hotelId,
            _userID: req.body._userID,
            room: req.body.room,
            start: req.body.start,
            end: req.body.end,
            price: req.body.price

        });

        // Save reservation, add to db
        reservation.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the reservation."
                });
            });

    }).catch(err => {

        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Hotel not found with id " + req.body._hotelId
            });
        }

        return res.status(500).send({
            message: "Error retrieving reservation with id " + req.body._hotelId
        });

    });

};

// Retrieve and return all reservations from the database.
exports.findAll = (req, res) => {
    Reservation.find()
        .then(reservations => {
            res.send(reservations);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving reservations."
            });
        });
};

// Find a single reservation with a reservationId
exports.findOne = (req, res) => {
    Reservation.findById(req.params.reservationId)
        .then(reservation => {
            if (!reservation) {
                return res.status(404).send({
                    message: "Reservation not found with id " + req.params.reservationId
                });
            }
            res.send(reservation);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Reservation not found with id " + req.params.reservationId
                });
            }
            return res.status(500).send({
                message: "Error retrieving reservation with id " + req.params.hotelId
            });
        });
};

// Update a reservation identified by the reservationId in the request
exports.update = (req, res) => {

    if (!req.body._hotelId) {
        return res.status(400).send({
            message: "Hotel ID is a paramater and can not be empty"
        });
    }

    if (!req.body.room) {
        return res.status(400).send({
            message: "Hotel room can not be empty"
        });
    }

    if (!req.body.start) {
        return res.status(400).send({
            message: "Must submit a start date."
        });
    }

    if (!req.body.end) {
        return res.status(400).send({
            message: "Must submit an end date."
        });
    }

    // Find reservation and update it with the request body
    Reservation.findByIdAndUpdate(req.params.reservationId, {
            // Create a reservation
            _hotelID: req.body._hotelId,
            _userID: req.body._userID,
            room: req.body.room,
            start: req.body.start,
            end: req.body.end,
            price: req.body.price
        }, {
            new: true
        })
        .then(reservation => {
            if (!reservation) {
                return res.status(404).send({
                    message: "Reservation not found with id " + req.params.reservationId
                });
            }
            res.send(reservation);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Reservation not found with id " + req.params.reservationId
                });
            }
            return res.status(500).send({
                message: "Error updating reservation with id " + req.params.reservationId
            });
        });
};

// Delete a reservation with the specified reservationId in the request
exports.delete = (req, res) => {
    Reservation.findByIdAndRemove(req.params.reservationId)
        .then(reservation => {
            if (!reservation) {
                return res.status(404).send({
                    message: "Reservation not found with id " + req.params.hotelId
                });
            }
            res.send({
                message: "Reservation deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Reservation not found with id " + req.params.hotelId
                });
            }
            return res.status(500).send({
                message: "Could not delete reservation with id " + req.params.hotelId
            });
        });
};