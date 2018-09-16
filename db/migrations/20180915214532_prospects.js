exports.up = function(knex, Promise) {
    return knex.schema.createTable('prospects', function(table){
        table.increments();
        table.string('address');
        table.string('establishment_name');
        table.string('establishment_web');
        table.string('valet_name');
        table.string('valet_web');
        table.integer('num_employees');
        table.string('comment');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('prospects');
};
