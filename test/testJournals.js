'use strict'

var crypto = require('crypto')
  , request = require('supertest')
  , server = require('../server')
  , config = require('../config')
  ;

function encryptPhrase(phrase){
  var password = 'SoylentGreenIsPeople';
  var cipher = crypto.createCipher('aes192', password);

  var encrypted = cipher.update(phrase, 'utf8', 'hex');

  encrypted += cipher.final('hex');

  return encrypted;
}

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
      var department = encryptPhrase('Seksjon for kvalitet og utvikling');
      request
        .get('/journals/department/'+department)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    })
  });

  describe('GET /journals/department/Seksjon for kvalitet og utvikling?date=20141016', function(){
    it('respond with json', function(done){
      var department = encryptPhrase('Seksjon for kvalitet og utvikling');
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