const db = require('../config')

const getMovies = (req, res) => {
    const page = parseInt(req.params.page);
    let offset = (page - 1) * 20;
    let query = `SELECT * FROM movies LIMIT 20 OFFSET ${offset}`
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
}

const getMovieDetails = (req, res) => {
    const id = parseInt(req.params.id);
    let query = `SELECT * FROM movies WHERE id = '${id}'`
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result[0])
    })
}

const getTopMovies = (req, res) => {
    let query = "SELECT * FROM movies LIMIT 10"
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
}

module.exports = { getMovies, getMovieDetails, getTopMovies }