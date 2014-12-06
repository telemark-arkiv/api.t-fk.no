'use strict'

var publicRoutes = require('./public')
  , municipalityRoutes = require('./municipalities')
  , departmentRoutes = require('./departments')
  , journalRoutes = require('./journals')
  , recruitmentRoutes = require('./recruitments')
  , routes = []
  ;

routes = routes.concat(publicRoutes);
routes = routes.concat(municipalityRoutes);
routes = routes.concat(departmentRoutes);
routes = routes.concat(journalRoutes);
routes = routes.concat(recruitmentRoutes);

module.exports = routes;