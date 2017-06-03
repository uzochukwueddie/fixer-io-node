var express = require('express');
var request = require('supertest');
var server = require('../server');

var app = express();


describe('Function Test', () => {
   it('should return an object', (done) => {
       var latest = server.latest('latest');
       
       app.get('/', function(req, res){
           res.status(200).json(latest);
       });
       
       request(app)
            .get('/')
            .expect({}, done)
   });
    
    it('should return a response of 200 for valid request', (done) => {
        var latest = server.latest('latest');
       
        app.get('/', function(req, res){
           res.status(200).json(latest);
        });
        
        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res){
                if(err) return done(err)
                done();
            })
    })
});














