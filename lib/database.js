/**
 * Created by nandunb on 11/9/17.
 */
'use strict';

const Sequelize = require('sequelize');
const config = require('./config.json');
const mysql = require('mysql2');

class DatabaseConnection {
    constructor(){
        //Get Configurations from the config file
        this.MYSQL_HOST = config.database.host;
        this.MYSQL_PORT = config.database.port;
        this.MYSQL_USERNAME = config.database.username;
        this.MYSQL_PWD = config.database.password;
        this.MYSQL_DATABASE = config.database.db_name;

        //Build the connection URL
        let connectionURL = 'mysql://'+this.MYSQL_USERNAME+":"+this.MYSQL_PWD+"@"+
            this.MYSQL_HOST+":"+this.MYSQL_PORT+"/"+this.MYSQL_DATABASE;

        const sequelize = new Sequelize(this.MYSQL_DATABASE, this.MYSQL_USERNAME, this.MYSQL_PWD, {
            host: this.MYSQL_HOST,
            dialect: 'mysql',

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },

        });

        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });


        console.log(connectionURL);
        //Build connection
        //

        // let connection = mysql.createConnection({
        //     host: this.MYSQL_HOST,
        //     user: this.MYSQL_USERNAME,
        //     password: this.MYSQL_PWD,
        //     database: this.MYSQL_DATABASE,
        //     acquiredTimeout: 1000000
        // });
        //
        // connection.connect();
    }
};

// DatabaseConnection.prototype.getConnection = ()=>{
//     return this.sequelize;
// };

module.exports = DatabaseConnection;