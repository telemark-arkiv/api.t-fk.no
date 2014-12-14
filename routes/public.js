'use strict';

var handlers = require('../handlers/public')
  , routes
  ;

routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getPublicResponse
  }
]

module.exports = routes;