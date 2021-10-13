module.exports = (app) => {
    const hotels = require('../controllers/hotel.controller.js');

    // Create a new hotel
    app.post('/hotels', hotels.create);

    // Retrieve all hotels
    app.get('/hotels', hotels.findAll);

    // Retrieve a single hotel with hotelId
    app.get('/hotels/:hotelId', hotels.findOne);

    // Update a hotel with hotelId
    app.put('/hotels/:hotelId', hotels.update);

    // Delete a hotel with hotelId
    app.delete('/hotels/:hotelId', hotels.delete);
}