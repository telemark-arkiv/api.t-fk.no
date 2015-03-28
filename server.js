'use strict';

var Hapi = require('hapi');
var apidocsService = require('lout');
var formsService = require('tfk-api-forms');
var distanceService = require('tfk-api-distance');
var stagesService = require('tfk-api-stages');
var geocodeService = require('tfk-api-geocode');
var schoolsService = require('tfk-api-schools');
var routes = require('./routes');
var config = require('./config');
var server = new Hapi.Server();

server.connection({
  port:config.SERVER_PORT,
  routes:{cors:{credentials:true}}
});

server.register([
  {
    register: apidocsService,
    options: {}
  },
  {
    register: formsService,
    options: {}
  },
  {
    register: distanceService,
    options: {}
  },
  {
    register: stagesService,
    options: {}
  },
  {
    register: geocodeService,
    options: {}
  },
  {
    register: schoolsService,
    options: {}
  }
], function(err) {
  if (err) {
    console.error('Failed to load a plugin:', err);
  }
});

server.route(routes);

function startServer() {
  server.start(function() {
    console.log('Server running at:', server.info.uri);
  });
}

function stopServer() {
  server.stop(function() {
    console.log('Server stopped');
  });
}

module.exports.start = startServer;

module.exports.stop =  stopServer;
