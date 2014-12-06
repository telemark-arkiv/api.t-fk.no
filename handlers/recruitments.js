'use strict';

var mongojs = require('mongojs')
  , config = require('../config')
  , db = mongojs(config.DB)
  , recruitments = db.collection('recruitments')
  ;

function getRecruitments(request, reply){
  recruitments.find(request.query, function (err, data) {
    if(err){
      reply(err);
    } else {
      reply(data)
    }
  });
}

function getRecruitment(request, reply){
  recruitments.findOne({recruitmentId:request.params.recruitmentId}, function (err, data) {
    if(err){
      reply(err)
    } else {
      reply(data);
    }
  });
}

module.exports.getRecruitments = getRecruitments;

module.exports.getRecruitment = getRecruitment;