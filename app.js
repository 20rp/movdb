const express = require('express')
const path = require('path')
// import livereload and connect-livereload for auto browser refresh
const liveReload = require("livereload")
const connectLiveReload = require('connect-livereload')
const { connect } = require('http2')
const bodyParser = require('body-parser')

// Create LiveReload connection event to refresh with a 50ms delay
const liveReloadServer = liveReload.createServer()
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/")
    }, 50)
})

const app = express()
const port = 3000

app.use(connectLiveReload())

app.set("views", path.join(__dirname, "pages"))
app.set("view engine", "pug")

// Init bodyParser
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index', {
        title: "Index - MovDB"
    })
})

app.post('/insert', (req, res) => {
    // TODO: insert-controller
    res.render('insert', {
        title: "Insert new movie",
        movieTitle: req.body.movieTitle,
        movieDate: req. body.movieDate,
        moviePlatform: req.body.moviePlatform
    })
    console.log(req.body.movieTitle)
})

app.get('/movies', (req, res) => {
    // TODO: movies table
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})