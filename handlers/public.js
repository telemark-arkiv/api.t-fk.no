'use strict';

var message = {
      message: "Hello, I'm your API",
      departments: "/departments",
      department: "/department/<departmentId>",
      journals: "/journals",
      journalsByDate: "/journals/date/<yyyymmdd>",
      journalsLatest: "/journals/latest",
      journal: "/journal/<journalId>",
      municipalities: "/municipalities",
      municipality: "/municipality/<municipalityId>",
      recruitments: "/recruitments",
      recruitment: "/recruitment/<recruitmentId>"
    }
  ;

function getPublicResponse(request, reply) {
  reply(message);
}

module.exports.getPublicResponse = getPublicResponse;