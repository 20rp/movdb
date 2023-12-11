const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set("views", path.join(__dirname, "pages"))
app.set("view engine", "pug")

app.get('/', (req, res) => {
    // TODO: Homepage
    res.render('index')
})

app.get('/insert', (req, res) => {
    // TODO: insert-controller
})

app.get('/movies', (req, res) => {
    // TODO: movies table
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})