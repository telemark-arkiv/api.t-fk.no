var handlers = require('../handlers/distance');
var routes;

routes = [
  {
    method: 'GET',
    path: '/distance/{origin}/{destination}',
    handler: handlers.getDistance
  }
];

module.exports = routes;