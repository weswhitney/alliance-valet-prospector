    console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/valet-prospector',
        debug: true
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        ssl: true
    }
};



// var knex = require('knex')({
//     client: 'pg',
//     version: '7.2',
//     connection: {
//         host : '127.0.0.1',
//         user : 'your_database_user',
//         password : 'your_database_password',
//         database : 'myapp_test'
//     }
// });




// postgresql-fluffy-12091