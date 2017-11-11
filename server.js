/**
 * Created by nandunb on 11/9/17.
 */
'use strict';

const express = require('express');
const app = express();

const ActorController = require('./controllers/actor.controller');

app.get('/', (req,res)=>{
    res.status(200).json({ message: "Welcome to the Sample REST API!" });
});

app.get('/actors', ActorController.getActors);
app.get('/actors/:id', ActorController.getActorById);

app.listen(process.env.PORT || 4201, (err)=>{
    if(err){
        console.log('Could not start application!');
    }else{
        console.log('Server started!');
    }
});

module.exports = app;