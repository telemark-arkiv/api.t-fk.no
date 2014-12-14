'use strict';

var handlers = require('../handlers/municipalities')
  , routes
  ;

routes = [
  {
    method: 'GET',
    path: '/municipalities',
    handler: handlers.getMunicipalities,
    config: {
      cors:true
    }
  },
  {
    method: 'GET',
    path: '/municipality/{municipalityId}',
    handler: handlers.getMunicipality,
    config: {
      cors:true
    }
  }
]

module.exports = routes;