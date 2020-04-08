const knex = require('knex');
const configurations = require('../../knexfile');

const silogismConnection = knex(configurations.silogism);

module.exports = silogismConnection;