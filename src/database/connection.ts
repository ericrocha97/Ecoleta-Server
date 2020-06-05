import knex from 'knex';
import path from 'path';
const configuration = require("../../knexfile");

let config;

    if(process.env.NODE_ENV === 'production'){
        config =  configuration.production;
    }else{
        config =  configuration.development;
    }



const connection = knex(config);

export default connection;