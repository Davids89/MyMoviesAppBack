var express = require('express');
var router = express.Router();
var movies_api = require('./movies_api');
var genres_api = require('./genres_api');
var cinema_api = require('./cinemas');
var general_routes = require('./general_routes');

//general routes
router.get('/', general_routes.index);

// *** movies *** //
router.get('/getPopular', movies_api.addPopular);
router.get('/popularMovies', movies_api.getPopularMovies);
router.get('/movie/:id', movies_api.getMovie);

// *** genres ** //
router.get('/getAllGenres', genres_api.getAllGenres);
router.get('/getMoviesByGenre/:id', genres_api.getMoviesByGenre);

// *** cinemas *** //
router.get('/getCinemas', cinema_api.getCinemas);

module.exports = router;
