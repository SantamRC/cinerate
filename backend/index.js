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

app.get('/movies/:page', (req, res) => {
    const page = parseInt(req.params.page);
    let offset = (page - 1) * 20;
    let query = `SELECT * FROM movies LIMIT 20 OFFSET ${offset}`
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
        let answer = [];
        for(let i=0;i<result.length;i++){
            
        }
        res.status(200).send(result)
    })
})

app.post('/ratings/:id/:person/:rate', (req, res) => {
    const id = parseInt(req.params.id);
    const personID = req.params.person
    const rate = parseInt(req.params.rate)
    let query = `SELECT * FROM ratings WHERE (person='${personID}' AND movie=${id});`
    db.query(query, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            let query = `UPDATE ratings SET rating=${rate} WHERE person='${personID}' AND movie=${id}`
            db.query(query, (err, result2) => {
                if (err) throw err;
                res.status(200).send({ message: "Data Updated" })
            })
        } else {
            let query = `INSERT INTO ratings VALUES ('${personID}',${id},${rate});`
            db.query(query, (err, result2) => {
                if (err) throw err;
                res.status(200).send({ message: "New Entry Created" })
            })
        }
    })
})

app.get('/moviedetails/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let query = `SELECT * FROM movies WHERE id = '${id}'`
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result[0])
    })
})

app.get('/topmovies', (req, res) => {
    let query = "SELECT * FROM movies LIMIT 10"
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

app.get('/search/:query', (req, res) => {
    let searchQuery = req.params.query
    let query = `SELECT * FROM movies WHERE title LIKE '%${searchQuery}%'`
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

app.listen(2023, console.log('Server listening on port:2023'));