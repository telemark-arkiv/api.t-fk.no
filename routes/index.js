'use strict'

var publicRoutes = require('./public')
  , municipalityRoutes = require('./municipalities')
  , departmentRoutes = require('./departments')
  , journalRoutes = require('./journals')
  , routes = []
  ;

routes = routes.concat(publicRoutes);
routes = routes.concat(municipalityRoutes);
routes = routes.concat(departmentRoutes);
routes = routes.concat(journalRoutes);

module.exports = routes;