'use strict';

const mysql = require('mysql');

const Config = require('./config.json');


let Database = (()=>{

    /*
    Database Configurations
    Read from config.js
     */
    const connection = mysql.createConnection({
        host: Config.database.host,
        user: Config.database.username,
        password: Config.database.password,
        database: Config.database.db_name
    });

    let connect = ()=>{
        connection.connect();
    };

    return{
        getConnection: ()=>{
            if(!connection.authorized){
                connect();
            }
            return connection;
        },

        closeConnection: ()=>{
            connection.end();
        }
    }

})();

module.exports = Database;