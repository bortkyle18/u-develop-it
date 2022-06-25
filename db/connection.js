const mysql = require('mysql2');
require('dotenv').config({path: './env/.env'});

// Connect to database (mysql)
const db = mysql.createConnection(
    {
        host: 'localhost',
        database: 'election',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
    console.log('Connected to the election database.')
);

module.exports = db;