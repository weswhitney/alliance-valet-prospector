var knex = require('./knex.js');

function ValetStations() {
    return knex('test-two');
}

/* queries */

function getAll() {
    return ValetStations().select();
}

function getSingle(stationID) {
    return ValetStations().where('id', parseInt(stationID)).first();
}

function add(station) {
    return ValetStations().insert(station, 'id');
}

module.exports = {
    getAll: getAll,
    getSingle: getSingle,
    add: add
};