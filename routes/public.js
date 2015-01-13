'use strict';

var handlers = require('../handlers/public');
var routes;

routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getPublicResponse
  }
];

module.exports = routes;