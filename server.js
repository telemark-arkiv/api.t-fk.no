'use strict';

var Hapi = require('hapi')
  , routes = require('./routes')
  , config = require('./config')
  , server = new Hapi.Server()
  ;

server.connection({
  port:config.SERVER_PORT,
  routes:{cors:true}
});

server.route(routes);

function startServer(){
  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
}

function stopServer(){
  server.stop(function () {
    console.log('Server stopped');
  });
}

module.exports.start = startServer;

module.exports.stop =  stopServer;