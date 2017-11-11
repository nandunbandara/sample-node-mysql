/**
 * Created by nandunb on 11/9/17.
 */
'use strict';

const express = require('express');
const app = express();

const ActorController = require('./controllers/actor.controller');
const CustomerController = require('./controllers/customer.controller');

app.get('/', (req,res)=>{
    res.status(200).json({ message: "Welcome to the Sample REST API!" });
});

//Actors
app.get('/actors', ActorController.getActors);
app.get('/actors/:id', ActorController.getActorById);

//Customers
app.get('/customers', CustomerController.getAllCustomers);
app.get('/customers/:id', CustomerController.getCustomerById);
app.get('/customers/:id/address', CustomerController.getAddressByCustomerId);

app.listen(process.env.PORT || 4201, (err)=>{
    if(err){
        console.log('Could not start application!');
    }else{
        console.log('Server started!');
    }
});

module.exports = app;