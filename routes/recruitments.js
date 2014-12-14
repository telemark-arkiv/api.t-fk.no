'use strict';

var handlers = require('../handlers/recruitments')
  , routes
  ;

routes = [
  {
    method: 'GET',
    path: '/recruitments',
    handler: handlers.getRecruitments,
    config: {
      cors:true
    }
  },
  {
    method: 'GET',
    path: '/recruitment/{jobid}',
    handler: handlers.getRecruitment,
    config: {
      cors:true
    }
  }
]

module.exports = routes;