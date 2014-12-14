'use strict';

var handlers = require('../handlers/departments')
  , routes
  ;

routes = [
  {
    method: 'GET',
    path: '/departments',
    handler: handlers.getDepartments
  },
  {
    method: 'GET',
    path: '/department/{departmentId}',
    handler: handlers.getDepartment,
    config: {
      cors:true
    }
  }
]

module.exports = routes;