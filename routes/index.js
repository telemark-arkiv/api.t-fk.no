'use strict'

var publicRoutes = require('./public')
  , municipalityRoutes = require('./municipality')
  , routes = []
  ;

routes = routes.concat(publicRoutes);
routes = routes.concat(municipalityRoutes);

module.exports = routes;