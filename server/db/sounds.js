const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
  name: Joi.string().required(),
  category: Joi.string().required(),
  year: Joi.number().integer().min(2018).max(2019),
  archived: Joi.boolean();
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
    return sounds.insert(sound);
  } else {
    return Promise.reject(result.error);
  }
}

function findById(id) {  
  return sounds.findOne({"_id": id}).then(sound => sound)
}

function updateSound(id, obj) {  
  return sounds.findOneAndUpdate({"_id": id}, obj).then(sound => {
    return sound;
  })
}

module.exports = {
  getAll,
  createSound,
  findById,
  updateSound
};