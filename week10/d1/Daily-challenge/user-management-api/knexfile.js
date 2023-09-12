module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'w10',
            user: 'postgres',
            password: 'test',
            host: 'localhost',
            port: 5432,
        },
        migrations: {
            directory: './migrations',
        },
    },
};

