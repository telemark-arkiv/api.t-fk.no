'use strict'

var publicRoutes = require('./public')
  , municipalityRoutes = require('./municipality')
  , departmentRoutes = require('./departments')
  , routes = []
  ;

routes = routes.concat(publicRoutes);
routes = routes.concat(municipalityRoutes);
routes = routes.concat(departmentRoutes);

module.exports = routes;