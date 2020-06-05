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
            host : 'remotemysql.com',
            database: 'YDUJZ8x6mX',
            user: 'YDUJZ8x6mX',
            password: 'pA0aMgiIY1'
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