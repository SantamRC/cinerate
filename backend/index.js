require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

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
app.use(cors())

app.get('/movies', (req, res) => {
    let query = "SELECT * FROM movies"
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

app.get('/ratings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let query = `SELECT * FROM ratings WHERE movie = '${id}'`
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

app.get('/topmovies', (req, res) => {
    let query = "SELECT * FROM movies LIMIT 10"
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

app.listen(2023, console.log('Server listening on port:2023'));