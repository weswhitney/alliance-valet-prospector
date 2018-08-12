module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/valet-prospector'
    },
    production: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
};