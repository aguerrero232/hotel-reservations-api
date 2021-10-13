module.exports = (app) => {
    const reservations = require('../controllers/reservation.controller.js');

    // Create a new reservation at a hotel
    app.post('/reservations', reservations.create);

    // Retrieve all reservations from a hotel
    app.get('/reservations', reservations.findAll);

    // Retrieve a single reservations with reservationId
    app.get('/reservations/:reservationId', reservations.findOne);

    // Update a reservation with reservationId
    app.put('/reservations/:reservationId', reservations.update);

    // Delete a reservation with reservationId
    app.delete('/reservations/:reservationId', reservations.delete);
}

// sample hotel id: 61241b795053c864546810a0