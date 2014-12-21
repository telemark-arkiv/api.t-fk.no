'use strict'

var request = require('supertest')
  , cipher = require('util-api-cipher')
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

  describe('GET /journals/date/distinct', function(){
    it('respond with json', function(done){
      request
        .get('/journals/date/distinct')
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

  describe('GET /journals/department/distinct', function(){
    it('respond with json', function(done){
      request
        .get('/journals/department/distinct')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /journals/department/Seksjon for kvalitet og utvikling', function(){
    it('respond with json', function(done){
      var department = cipher.encrypt('Seksjon for kvalitet og utvikling');
      request
        .get('/journals/department/'+department)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /journals/department/Seksjon for kvalitet og utvikling?date=20141016', function(){
    it('respond with json', function(done){
      var department = cipher.encrypt('Seksjon for kvalitet og utvikling');
      request
        .get('/journals/department/' + department + '?date=20141016')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /journals/collection/65', function(){
    it('respond with json', function(done){
      request
        .get('/journals/collection/65')
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

  describe('GET /journal/211', function(){
    it('respond with json', function(done){
      request
        .get('/journal/211')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

});