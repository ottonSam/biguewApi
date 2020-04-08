const knex = require('knex');
const configurations = require('../../knexfile');

const userConnection = knex(configurations.user);

module.exports = userConnection;