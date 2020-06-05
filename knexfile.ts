import path from 'path';

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname,'src','database','database.sqlite'),
        },
        migrations: {
            directory: path.resolve(__dirname,'src','database','migrations')
        },
        seeds: {
            directory: path.resolve(__dirname,'src','database','seeds')
        },
        useNullAsDefault: true,
    },

    production: {
        client: 'mysql',
        connection: {
            host : 'sql10.freemysqlhosting.net',
            database: 'sql10345939',
            user: 'sql10345939',
            password: 'rQQa6GIFrD'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: path.resolve(__dirname,'src','database','migrations')
        },
        seeds: {
            directory: path.resolve(__dirname,'src','database','seeds')
        },
    }
};