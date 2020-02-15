const express = require('express');
const cors = require('cors');
const initTracks = require('./repository');

const app = express();

app.use(cors());

app.get('/tracks', (req, res) => {
    res.send(JSON.stringify({tracks: initTracks}));
});
app.get('', async (req, res) => {
    res.send(JSON.stringify({tracks: initTracks}))
});
app.use(function (req, res) {
    res.sendStatus(404)
});

app.listen(8000, function () {
    console.log("App is listening on port 3000")
});