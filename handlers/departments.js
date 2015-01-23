'use strict';

var mongojs = require('mongojs');
var config = require('../config');
var db = mongojs(config.DB);
var departments = db.collection('departments');

function getDepartments(request, reply) {
  departments.find(request.query, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

function getDepartment(request, reply) {
  departments.findOne({departmentId:request.params.departmentId}, function(err, data) {
    if (err) {
      reply(err);
    } else {
      reply(data);
    }
  });
}

module.exports.getDepartments = getDepartments;

module.exports.getDepartment = getDepartment;
