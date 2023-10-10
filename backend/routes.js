const express = require('express');
const router = express.Router();

const { getMovies, getMovieDetails, getTopMovies } = require("./controllers/movie")
const { getRatings, updateRatings } = require("./controllers/ratings")
const { getSearchResult } = require("./controllers/search")


// Routes
router.get('/movies/:page', getMovies);
router.get('/ratings/:id', getRatings);
router.post('/ratings/:id/:person/:rate', updateRatings)
router.get('/moviedetails/:id', getMovieDetails)
router.get('/topmovies', getTopMovies)
router.get('/search/:query', getSearchResult)

module.exports = router;