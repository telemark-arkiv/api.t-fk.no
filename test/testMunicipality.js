'use strict'

var request = require('supertest')
  , server = require('../server')
  ;

request = request('http://localhost:3000');

describe('Server municipality', function () {

  before(function () {
    server.start();
  });

  after(function () {
    server.stop();
  });

  describe('GET /municipalities', function(){
    it('respond with json', function(done){
      request
        .get('/municipalities')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /municipality/0805', function(){
    it('respond with json', function(done){
      request
        .get('/municipality/0805')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

});