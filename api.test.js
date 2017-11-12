/**
 * Created by nandunb on 11/9/17.
 */
'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('./server');

const should = chai.should();
chai.use(chaiHttp);

describe('API', ()=>{
    it('should return a status of 200', (done)=>{
        chai.request(server)
            .get('/')
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
    });

    describe('Actors',()=>{
        it('should get all the records of actors', (done)=>{
            chai.request(server)
                .get('/actors')
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.not.be.null;
                    res.body.should.have.property("success").eql(true);
                    res.body.data.should.be.a("array");
                    done();
                })
        });

        it('should get the actor with actor_id 2', (done)=>{
            chai.request(server)
                .get('/actors/2')
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.not.be.null;
                    res.body.should.have.property("success").eql(true);
                    res.body.should.have.property("data");
                    res.body.data[0].should.have.property("actor_id").eql(2);
                    done();
                })
        })
    });

    describe('Customers',()=>{
        it('should get all the records of customers', (done)=>{
            chai.request(server)
                .get('/customers')
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.not.be.null;
                    res.body.should.have.property("success").eql(true);
                    res.body.data.should.be.a("array");
                    done();
                })
        });

        it('should get the customer with customer_id 2', (done)=>{
            chai.request(server)
                .get('/customers/2')
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.not.be.null;
                    res.body.should.have.property("success").eql(true);
                    res.body.should.have.property("data");
                    res.body.data[0].should.have.property("customer_id").eql(2);
                    done();
                })
        });

        it('should get the address of the customer with customer_id 2', (done)=>{
            chai.request(server)
                .get('/customers/2/address')
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.have.property("success").eql(true);
                    res.body.should.have.property("data");
                    res.body.data.should.have.lengthOf(1);
                    res.body.data[0].should.have.property("address").eql("1121 Loja Avenue");
                    res.body.data[0].should.have.property("address2").eql("");
                    res.body.data[0].should.have.property("district").eql("California");
                    res.body.data[0].should.have.property("city").eql("San Bernardino");
                    res.body.data[0].should.have.property("country").eql("United States");
                    res.body.data[0].should.have.property("postal_code").eql("17886");
                    done();
                })
        })
    })


});