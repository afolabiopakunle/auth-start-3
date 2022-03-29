const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const api = require('./routes/api');

app.use(bodyParser.json());

app.use('/api', api)

app.get('/', (req, res) => {
    res.send("Homepage is bae");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
})
