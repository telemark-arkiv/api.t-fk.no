'use strict'

var routes = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply({"message": "Hello, i'm your API"});
    }
  }
]

module.exports = routes;