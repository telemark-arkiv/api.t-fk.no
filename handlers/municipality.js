'use strict';

function getMunicipalities(request, reply){
  reply({"message": "getMunicipalities"})
}

function getMunicipality(request, reply){
  reply({"message": "getMunicipality: " + request.params.municipalityId})
}


module.exports.getMunicipalities = getMunicipalities;

module.exports.getMunicipality = getMunicipality;