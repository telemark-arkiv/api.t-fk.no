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

  describe('GET /municipality/5459eff5f8b82e7b40fcebdb', function(){
    it('respond with json', function(done){
      request
        .get('/municipality/5459eff5f8b82e7b40fcebdb')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

});