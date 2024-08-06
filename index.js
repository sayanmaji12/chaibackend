require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000; //listen to port 3000


app.get('/', (req, res) => {
    res.send("Hello World !")
})

app.get('/login', (req, res) => {
    res.send("login data")
})

app.get('/youtube', (req,res) => {
    res.send('<h1>youtube2</h1>')
})

app.get('/youtube', (req,res) => {
    res.json('<h1>youtube2</h1>')
})
app.get('/sam', (req,res) => {
    res.json('<h1>SAM</h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`App listening to port ${port}`)
})