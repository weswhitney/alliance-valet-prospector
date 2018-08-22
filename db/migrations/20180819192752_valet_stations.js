exports.up = function(knex, Promise) {
    return knex.schema.createTable('stations', function(table){
        table.increments();
        table.string('valet_name');
        table.integer('valet_phone');
        table.string('valet_web');
        table.string('valet_email');
        table.string('valet_contact');
        table.string('establishment_name');
        table.integer('establishment_phone');
        table.string('establishment_contact');
        table.string('establishment_email');
        table.integer('num_employees');
        table.time('time');
        table.date('date');
        table.string('address');
        table.string('comment');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('stations');
};