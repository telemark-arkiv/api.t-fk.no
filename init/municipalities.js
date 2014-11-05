'use strict';

var fs = require('fs')
  , mongojs = require('mongojs')
  , config = require('../config')
  , db = mongojs(config.DB)
  , municipality = db.collection('municipality')
  ;

function getData(callback){
  fs.readFile('data/municipalities.json', function(err, data){
    if(err){
      return callback(err, null);
    } else {
      return callback(null, JSON.parse(data.toString()));
    }
  })
}

function addMunicipality(post){
  municipality.save(post, function (err, success) {
    if(err){
      console.error(err);
    } else {
      console.log(success);
    }
  });
}

// First we drop the collection
municipality.drop();

// Get the init data
getData(function(err, data){
  if(err){
    console.error(err)
  } else {
    data.forEach(function(municipality){
      addMunicipality(municipality);
    });
  }
});