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

module.exports = {
    getAll: getAll,
    getSingle: getSingle
};