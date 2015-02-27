'use strict';

var distance = require('google-distance');

function getDistance(request, reply) {

  distance.get({
      mode: 'walking',
      origin: request.params.origin,
      destination: request.params.destination
    },
    function(err, data) {
      if (err) {
        reply(err);
      } else {
        reply(data);
      }
    });

}

module.exports.getDistance = getDistance;