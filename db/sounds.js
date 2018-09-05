const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
  name: Joi.string().alphanum().required(),
  soundUrl: Joi.string().uri({
    scheme: [
      /https?/
    ]
  })
})

const sounds = db.get('sounds');

function getAll() {
  return sounds.find();
}

function createSound(sound) {
  const result = Joi.validate(sound, schema);
  if (result.error == null) {
    sound.created = new Date();
    return sounds.insertOne(sound);
  } else {
    return Promise.reject(result.error);
  }
}

module.exports = {
  getAll,
  createSound
};