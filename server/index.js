const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const sounds = require('./db/sounds');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: '🔷🔶 Denver Broncos sound bite API 🐴'
  });
});

app.get('/sounds', (req, res) => {
  sounds.getAll().then((sounds) => {
    res.json(sounds);
  });
})

app.post('/sounds', (req, res) => {
  console.log(req.body);
  sounds.createSound(req.body).then((sound) => {
    res.json(sound);
  }).catch((error) => {
    res.status(500);
    res.json(error);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});