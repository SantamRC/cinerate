const db = require("../config")

const getSearchResult = (req, res) => {
    let searchQuery = req.params.query
    let query = `SELECT * FROM movies WHERE title LIKE '%${searchQuery}%'`
    db.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
}

module.exports = { getSearchResult }