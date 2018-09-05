const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/soundboard';
const db = monk(connectionString);

module.exports = db;