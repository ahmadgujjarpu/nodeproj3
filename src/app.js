//import express module
const express = require('express');
const auth= require('./middleware/auth')
const Sequelize = require('sequelize');
//import cors
const cors = require('cors');
const cookieParser = require('cookie-parser');
// import config.js file
const config = require('./config/config');

// import functions from jwt.js file
//const jwt = require('./jwt');
///users route file

const db = require('./config/db');



const User = require('./models/user.model');
const route=require('./routes');
const {setViewUser}=require('./middleware/auth')



//creates an object of type express. This represents our application.
const app = express();
app.use(cookieParser());
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.use(express.static("./public"));
app.set('view engine', 'ejs');



// parse json request body



// app.get('*', auth.setViewUser);
// app.get('*',setViewUser)

app.use("/", route);

// If route is /users, then use what's inside ref by userRoute.


module.exports = app;

//Server listening on port 3000
//app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}`));

