var knex = require('./knex.js');

function ValetStations() {
    return knex('prospects');
}
// function ValetStations() {
//     return knex('valet_stations');
// }

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

function update(stationID, updates) {
    return ValetStations().where('id', parseInt(stationID)).update(updates);
}
// start here
function deleteItem(stationID) {
    return ValetStations().where('id', parseInt(stationID)).del();
}




module.exports = {
    getAll: getAll,
    getSingle: getSingle,
    add: add,
    update: update,
    deleteItem: deleteItem
};
