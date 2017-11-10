/**
 * Created by nandunb on 11/9/17.
 */
'use strict';

const express = require('express');
const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'cyborgs.cf0bzul2pkld.us-west-2.rds.amazonaws.com',
    user: 'cyb_root',
    password: 'pass123$',
    database: 'sakila'
});

connection.connect();

app.get('/', (req,res)=>{
    res.status(200).json({ message: "Welcome to the Sample REST API!" });
});

app.get('/actors', (req,res)=>{
    connection.query('SELECT * FROM actor', (err,rows, fields)=>{
        if(err){
            res.status(500).json({ success: false, message: "Could not retrieve actors!", error:err});
            return;
        }
        res.status(200).json({ success: true, data:rows });
    });
});

app.get('/actors/:id', (req,res)=>{
    let query_string = "SELECT * FROM actor WHERE actor_id = '"+req.params.id+"'";
    connection.query(query_string, (err,rows, fields)=>{
        if(err){
            res.status(500).json({ success: false, message: "Could not retrieve actor!", error:err});
            return;
        }
        res.status(200).json({ success: true, data:rows });
    });
})

app.listen(process.env.PORT || 4201, (err)=>{
    if(err){
        console.log('Could not start application!');
    }else{
        console.log('Server started!');
    }
});

module.exports = app;