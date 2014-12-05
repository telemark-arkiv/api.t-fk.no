'use strict';

var message = {
      message: "Hello, I'm your API",
      departments: "/departments",
      department: "/department/<departmentId>",
      journals: "/journals",
      journal: "/journal/<journalId>",
      municipalities: "/municipalities",
      municipality: "municipality/<municipalityId>"
    }
  ;

function getPublicResponse(request, reply) {
  reply(message);
}

module.exports.getPublicResponse = getPublicResponse;