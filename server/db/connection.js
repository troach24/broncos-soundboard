const monk = require('monk');
const connectionString = 'localhost/soundboard';
const db = monk(connectionString);

module.exports = db;