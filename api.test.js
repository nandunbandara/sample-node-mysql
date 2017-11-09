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
    })
});