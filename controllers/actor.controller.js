/**
 * Created by nandunb on 11/11/17.
 */

const Database = require('../lib/database');

/*
 GET all actors
 */
exports.getActors = (req,res)=>{
    Database.getConnection().query('SELECT * FROM actor', (err,rows, fields)=>{
        if(err){
            res.status(500).json({ success: false, message: "Could not retrieve actors!", error:err});
            return;
        }
        res.status(200).json({ success: true, data:rows });
    });
};

/*
 GET actor by given id
 */
exports.getActorById = (req,res)=>{
    let query_string = "SELECT * FROM actor WHERE actor_id = '"+req.params.id+"'";
    Database.getConnection().query(query_string, (err,rows, fields)=>{
        if(err){
            res.status(500).json({ success: false, message: "Could not retrieve actor!", error:err});
            return;
        }
        res.status(200).json({ success: true, data:rows });
    });
};