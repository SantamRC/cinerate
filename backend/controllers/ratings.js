const db = require("../config")

const getRatings = (req, res) => {
    const id = parseInt(req.params.id);
    let query = `SELECT * FROM ratings WHERE movie = '${id}'`
    db.query(query, (err, result) => {
        if (err) throw err;
        let answer = [];
        for (let i = 0; i < result.length; i++) {

        }
        res.status(200).send(result)
    })
}

const updateRatings = (req, res) => {
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
}

module.exports = { getRatings, updateRatings }