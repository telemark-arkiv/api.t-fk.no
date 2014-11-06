'use strict'

var request = require('supertest')
  , server = require('../server')
  ;

request = request('http://localhost:3000');

describe('Server departments', function () {

  before(function () {
    server.start();
  });

  after(function () {
    server.stop();
  });

  describe('GET /departments', function(){
    it('respond with json', function(done){
      request
        .get('/departments')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /department/35', function(){
    it('respond with json', function(done){
      request
        .get('/department/35')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

});