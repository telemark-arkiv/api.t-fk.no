'use strict';

var request = require('supertest');
var server = require('../server');
var config = require('../config');

request = request('http://localhost:' + config.SERVER_PORT);

describe('Server distance', function() {

  before(function() {
    server.start();
  });

  after(function() {
    server.stop();
  });

  describe('GET /distance/origin/destination', function() {
    it('respond with json', function(done) {
      request
        .get('/distance/Kjærlighetsstien 24, 3670 Notodden/Tveiten skole, Notodden')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

});
