'use strict';

var mongojs = require('mongojs')
  , config = require('../config')
  , db = mongojs(config.DB)
  , municipalities = db.collection('municipalities')
  ;

function getMunicipalities(request, reply){
  municipalities.find(request.query, function (err, data) {
    if(err){
      reply(err);
    } else {
      reply(data)
    }
  });
}

function getMunicipality(request, reply){
  municipalities.findOne({kode:request.params.municipalityId}, function (err, data) {
    if(err){
      reply(err)
    } else {
      reply(data);
    }
  });
}

module.exports.getMunicipalities = getMunicipalities;

module.exports.getMunicipality = getMunicipality;