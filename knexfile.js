// the file which contains our various database configurations. Once you have a knexfile.js, you can use the migration tool
// to create migration files to the specified directory (default migrations). Creating new migration files can be achieved
// by running: $ knex migrate:make migration_name
require('dotenv').config({path: 'path_to_env_file'});

module.exports = {
    // production: {
    //     client: 'pg',
    //     connection: {
    //         host: process.env.DB_HOST,
    //         user: process.env.DB_USER,
    //         password: process.env.DB_PASS,
    //         database: process.env.DB_NAME
    //     }
    // },
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
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
    },
    // production: {
    //     client: 'pg',
    //     connectionString: "dbname=d5sc8907bnfcu5 host=ec2-54-227-241-179.compute-1.amazonaws.com port=5432 user=ojgyiflbcrakjj password=ef9b4f50012c428cc9369ba3fbdd49e3f1c5936330fce32fe766a7e872b559d7 sslmode=require",
    //     ssl: true,
    //     migrations: {
    //         directory: __dirname + '/db/migrations'
    //     },
    //     seeds: {
    //         directory: __dirname + '/db/seeds/production'
    //     }
    // }
    // production: {
    //     client: 'postgresql',
    //     connection: {
    //         database: 'postgres://ojgyiflbcrakjj:ef9b4f50012c428cc9369ba3fbdd49e3f1c5936330fce32fe766a7e872b559d7@ec2-54-227-241-179.compute-1.amazonaws.com:5432/d5sc8907bnfcu5',
    //         user: 'ojgyiflbcrakjj',
    //         password: 'ef9b4f50012c428cc9369ba3fbdd49e3f1c5936330fce32fe766a7e872b559d7'
    //     }
    // }
    // production: {
    //     client: 'pg',
    //     connectionString: process.env.DATABASE_URL,
    //     ssl: true
    // }
    // production: {
    //     client: 'pg',
    //     connectionString: process.env.DATABASE_URL,
    //     migrations: {
    //         directory: __dirname + '/db/migrations'
    //     },
    //     seeds: {
    //         directory: __dirname + '/db/seeds/development'
    //     }
    // }
};
