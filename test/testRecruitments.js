'use strict'

var request = require('supertest')
  , server = require('../server')
  ;

request = request('http://localhost:3000');

describe('Server recruitments', function () {

  before(function () {
    server.start();
  });

  after(function () {
    server.stop();
  });

  describe('GET /recruitments', function(){
    it('respond with json', function(done){
      request
        .get('/recruitments')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /recruitment/2402', function(){
    it('respond with json', function(done){
      request
        .get('/recruitment/2402')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

});