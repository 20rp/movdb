const express = require('express')
const router = express.router()

const movieController = require('../controllers/movieController')

router.get('/movies', movieController.allMovies)

module.exports = router
