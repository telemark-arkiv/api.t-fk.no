'use strict'

var request = require('supertest')
  , server = require('../server')
  ;

request = request('http://localhost:3000');

describe('Server journals', function () {

  before(function () {
    server.start();
  });

  after(function () {
    server.stop();
  });

  describe('GET /journals', function(){
    it('respond with json', function(done){
      request
        .get('/journals')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /journals/2014_64', function(){
    it('respond with json', function(done){
      request
        .get('/journal/2014_64')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

});