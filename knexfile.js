// the file which contains our various database configurations. Once you have a knexfile.js, you can use the migration tool
// to create migration files to the specified directory (default migrations). Creating new migration files can be achieved
// by running: $ knex migrate:make migration_name


module.exports = {

    // test: {
    //     client: 'pg',
    //     connection: 'postgres://localhost/valet-prospector',
    //     migrations: {
    //         directory: __dirname + '/db/migrations'
    //     },
    //     seeds: {
    //         directory: __dirname + '/db/seeds/test'
    //     }
    // },
    development: {
        client: 'pg',
        connection: 'postgres://localhost/valet-prospector',
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/development'
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/production'
        }
    }

};
