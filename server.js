'use strict';

var Hapi = require('hapi')
  , routes = require('./routes')
  , server = new Hapi.Server(3000)
  ;

server.route(routes);

server.start(function () {
  console.log('Server running at:', server.info.uri);
});