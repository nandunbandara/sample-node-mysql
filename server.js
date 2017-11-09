/**
 * Created by nandunb on 11/9/17.
 */
'use strict';

const express = require('express');
const app = express();

const DatabaseConnection = require('./lib/database');

app.get('/', (req,res)=>{
    res.status(200).json({ message: "Welcome to the Sample REST API!"});
});

app.listen(process.env.PORT || 4201, (err)=>{
    if(err){
        console.log('Could not start application!');
    }else{
        console.log('Server started!');
    }
});

// let db = new DatabaseConnection();

// let sequelize = db.getConnection();

// sequelize.authenticate().then(()=>{
//     console.log('Connection has been established!');
// }).catch(err=>{
//     console.log('Unable to connect to the database: ',err);
// });

module.exports = app;