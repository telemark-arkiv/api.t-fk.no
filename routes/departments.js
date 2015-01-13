'use strict';

var handlers = require('../handlers/departments');
var routes;

routes = [
  {
    method: 'GET',
    path: '/departments',
    handler: handlers.getDepartments
  },
  {
    method: 'GET',
    path: '/department/{departmentId}',
    handler: handlers.getDepartment
  }
];

module.exports = routes;