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

exports.getAddressByCustomerId = (req,res)=>{
    let query_string = "SELECT a.address, a.address2, a.district, c.city, coun.country, a.postal_code "
                        + "FROM address a, customer cus, city c, country coun WHERE cus.customer_id = '"+req.params.id+"' "
                        + "AND a.address_id = cus.address_id AND a.city_id = c.city_id "
                        + "AND c.country_id = coun.country_id";

    Database.getConnection().query(query_string, (err,rows, fields)=>{
        if(err){
            res.status(500).json({ success: false, message: "Could not retrieve customer address!", error:err});
            return;
        }
        res.status(200).json({ success: true, data:rows });
    });
};