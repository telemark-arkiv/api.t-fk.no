'use strict';

function getPublicResponse(request, reply) {
  reply({"message": "Hello, i'm your API"});
}

module.exports.getPublicResponse = getPublicResponse;