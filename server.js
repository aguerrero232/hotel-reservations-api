const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');
const http = require('http');
const https = require('https');
const fs = require('fs');

const reservation = require('./app/models/reservation.model.js');
const reservations = require('./app/controllers/reservation.controller.js');

const port = normalizePort(process.env.PORT || '3000');
const database_uri = "mongodb+srv://ariel:pokemon@seprojectcluster.ea5vl.mongodb.net/hotel_listing_db?retryWrites=true&w=majority";
mongoose.set('useFindAndModify', false);

// create express app
const app = express();
app.use(cors());

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json()) // To parse the incoming requests with JSON payloads

// Require hotel routes
require('./app/routes/hotel.routes.js')(app);
require('./app/routes/reservation.routes.js')(app);
require('./app/routes/user.routes.js')(app);

// Connecting to the database
mongoose.Promise = global.Promise;
let db = mongoose.connect(database_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...\n', err);
    process.exit();
});

// simple route
app.get('/', (req, res) => {
    res.json({
        "message": "Software Engineering Project"
    });
});

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});

cron.schedule( '5 * * * * *', async () => {
    console.log('running a task every minute');
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    console.log("TODAY: \n");
    console.log(today);
    // const endpoint = "https://hotel-system-api.herokuapp.com/reservations";

    console.log("TOP");

    var https = require('https');

    var options = {
        host: 'hotel-system-api.herokuapp.com',
        path: '/reservations',
        headers: {
            'Accept': 'application/json'
        }
    };



    await https.get(options, function (res) {
        var json = [];
    
        res.on('data', function (chunk) {
            json.push(chunk);
        });
    
        res.on('end', function () {
            if (res.statusCode === 200) {
                try {

                    for(let i =0; i < json.length; i++){
                        var data = JSON.parse(json[i]);
                        // data is available here:   

                        if( Date(data.end) == Date().now())
                            console.log(data);
                    }

                } catch (e) {
                    console.log('Error parsing JSON!');
                }
            } else {
                console.log('Status:', res.statusCode);
            }
        });
    }).on('error', function (err) {
        console.log('Error:', err);
    });
 
});