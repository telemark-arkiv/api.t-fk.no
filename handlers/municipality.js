'use strict';

var mongojs = require('mongojs')
  , config = require('../config')
  , db = mongojs(config.DB)
  , municipality = db.collection('municipality')
  ;

function getMunicipalities(request, reply){
  municipality.find(request.query, function (err, data) {
    if(err){
      reply(err);
    } else {
      reply(data)
    }
  });
}

function getMunicipality(request, reply){
  municipality.findOne({kode:request.params.municipalityId}, function (err, data) {
    if(err){
      reply(err)
    } else {
      reply(data);
    }
  });
}


module.exports.getMunicipalities = getMunicipalities;

module.exports.getMunicipality = getMunicipality;