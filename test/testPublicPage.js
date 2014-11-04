'use strict'

var request = require('supertest')
  , app = require('../server')
  ;

request = request('http://localhost:3000');

describe('GET /', function(){
  it('respond with json', function(done){
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})