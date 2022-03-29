const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const api = require('./routes/api');

app.use(bodyParser.json());

app.use('/api', api)

const db = 'mongodb+srv://afolabi:8899fifafa@cluster0.bwrba.mongodb.net/eventsdb?retryWrites=true&w=majority';

mongoose.connect(db, (err) => err ? console.log(err) : console.log('Connected to mongoDB'))

app.get('/', (req, res) => {
    res.send("Homepage is bae");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
})
