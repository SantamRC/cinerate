require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'test',
})

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connection established')
})

const app = express();

app.listen(3000, console.log('Server listening on port:3000'));