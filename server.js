/**
 * Created by nandunb on 11/9/17.
 */
'use strict';

const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({ message: "Welcome to the Sample REST API!"});
});

