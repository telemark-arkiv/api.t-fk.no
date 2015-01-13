'use strict';

var publicRoutes = require('./public');
var municipalityRoutes = require('./municipalities');
var departmentRoutes = require('./departments');
var journalRoutes = require('./journals');
var recruitmentRoutes = require('./recruitments');
var routes = [];

routes = routes.concat(publicRoutes);
routes = routes.concat(municipalityRoutes);
routes = routes.concat(departmentRoutes);
routes = routes.concat(journalRoutes);
routes = routes.concat(recruitmentRoutes);

module.exports = routes;