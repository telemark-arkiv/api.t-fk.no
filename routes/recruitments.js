'use strict';

var handlers = require('../handlers/recruitments');
var routes;

routes = [
  {
    method: 'GET',
    path: '/recruitments',
    handler: handlers.getRecruitments
  },
  {
    method: 'GET',
    path: '/recruitment/{jobid}',
    handler: handlers.getRecruitment
  }
];

module.exports = routes;
