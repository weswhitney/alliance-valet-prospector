var knex = require('./knex.js');

function ValetStations() {
    return knex('test-two');
}

/* queries */

function getAll() {
    return ValetStations().select();
}

module.exports = {
    getAll: getAll
}