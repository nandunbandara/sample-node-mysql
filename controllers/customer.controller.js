/**
 * Created by nandunb on 11/11/17.
 */
'use strict';

const Database = require('../lib/database');

exports.getAllCustomers = (req,res)=>{
    Database.getConnection().query('SELECT * FROM customer', (err, rows, fields)=>{
        if(err){
            res.status(500).json({ success:false, message: "Could not retrieve customer records!"});
            return;
        }
        res.status(200).json({ success:true, data: rows });
    })
};

exports.getCustomerById = (req,res)=>{
    let query_string = "SELECT * FROM customer WHERE customer_id = '"+req.params.id+"'";
    Database.getConnection().query(query_string, (err,rows, fields)=>{
        if(err){
            res.status(500).json({ success: false, message: "Could not retrieve customer!", error:err});
            return;
        }
        res.status(200).json({ success: true, data:rows });
    });
};