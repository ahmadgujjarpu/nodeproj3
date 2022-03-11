//import express module
const express = require('express');

//import cors
const cors = require('cors');

// import config.js file
const config = require('./config/config');

// import functions from jwt.js file
//const jwt = require('./jwt');
///users route file
const userRoute = require('./routes/user.route');

const db = require('./config/db');

const Sequelize = require('sequelize');

const User = require('./models/user.model');

//creates an object of type express. This represents our application.
const app = express();



// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());

//signup route
app.post('/signup', (req, res) => {
    console.log("POST from signup");
    res.send('signup');
    
});

//sign-in route
app.post('/sigin', (req, res) => {
    console.log("POST from sigin");

});


app.get('/', (req, res) => {
    console.log("Get from root");
    User.findAll()
        .then(users => {
            console.log(users);
            res.send(users);
        })
        .catch(err => console.log(err));

   // res.send('root');
 });

// If route is /users, then use what's inside ref by userRoute.
app.use("/user", userRoute);


module.exports = app;

//Server listening on port 3000
//app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}`));

