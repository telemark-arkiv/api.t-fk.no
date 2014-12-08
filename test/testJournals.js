'use strict'

var request = require('supertest')
  , server = require('../server')
  , config = require('../config')
  ;

request = request('http://localhost:' + config.SERVER_PORT);

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

  describe('GET /journals/date/20141016', function(){
    it('respond with json', function(done){
      request
        .get('/journals/date/20141016')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /journals/latest', function(){
    it('respond with json', function(done){
      request
        .get('/journals/latest')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /journals/2014_65', function(){
    it('respond with json', function(done){
      request
        .get('/journal/2014_65')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

});