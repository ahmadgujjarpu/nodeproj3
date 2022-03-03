const path = require('path');
//import dotenv
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../../.env') });


const config = {
    app: {
        port: process.env.PORT
    },

    db: {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        dbport: process.env.DBPORT
    },
    jwt: {
        JWT_SECRET: process.env.JWT_SECRET
    }
};


module.exports = config;

