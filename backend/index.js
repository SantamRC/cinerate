require('dotenv').config();
const express = require('express');
const cors = require('cors');

const db = require("./config")
const routes = require("./routes")

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connection established')
})

const app = express();

app.use(cors())

app.use('/', routes)

app.listen(2023, console.log('Server listening on port:2023'));