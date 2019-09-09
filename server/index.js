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
});

app.post('/sound', (req, res) => {
  console.log(req.body);
  sounds.createSound(req.body).then((sound) => {
    res.json(sound);
  }).catch((error) => {
    res.status(500);
    res.json(error);
  });
});

app.get('/sound/:id', (req, res) => {
  sounds.findById(req.params.id).then((sound) => {
    res.json(sound);
  }).catch((error) => {
    res.status(500);
    res.json(error);
  });
});

app.put('/sound/:id', (req, res) => {
  sounds.findById(req.params.id).then((sound) => {
    req.body.fieldNames.forEach((field, index) => {
      sound[field] = req.body.fieldValues[index];
    });
    return sound;
  }).catch((error) => {
    res.status(500);
    res.json(error);
  }).then((sound) => {
    return sounds.updateSound(req.params.id, sound)
  }).then((sound) => {
    res.json(sound);
  }).catch((error) => {
    res.status(500);
    res.json(error);
  });
});

// Where da Delete route?!


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});