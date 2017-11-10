/**
 * Created by nandunb on 11/9/17.
 */
'use strict';

const express = require('express');
const app = express();

const Database = require('./lib/database');

app.get('/', (req,res)=>{
    res.status(200).json({ message: "Welcome to the Sample REST API!" });
});

/*
GET all actors
 */
app.get('/actors', (req,res)=>{
    Database.getConnection().query('SELECT * FROM actor', (err,rows, fields)=>{
        if(err){
            res.status(500).json({ success: false, message: "Could not retrieve actors!", error:err});
            return;
        }
        res.status(200).json({ success: true, data:rows });
    });
});

/*
GET actor by given id
 */
app.get('/actors/:id', (req,res)=>{
    let query_string = "SELECT * FROM actor WHERE actor_id = '"+req.params.id+"'";
    Database.getConnection().query(query_string, (err,rows, fields)=>{
        if(err){
            res.status(500).json({ success: false, message: "Could not retrieve actor!", error:err});
            return;
        }
        res.status(200).json({ success: true, data:rows });
    });
});

app.listen(process.env.PORT || 4201, (err)=>{
    if(err){
        console.log('Could not start application!');
    }else{
        console.log('Server started!');
    }
});

module.exports = app;