'use strict';

var mongojs = require('mongojs')
  , config = require('../config')
  , db = mongojs(config.DB)
  , journals = db.collection('journals')
  ;


function getLatestJournalDate(cb){
  journals.find().sort({"JOURNPOST_OJ.JP_JDATO":-1}).limit(1, function (err, data) {
    if(err){
      return cb(err, null);
    } else {
      if(data){
        return cb(null, {date: data[0].JOURNPOST_OJ.JP_JDATO})
      } else {
        return cb(null, data);
      }
    }
  });
}

function getJournals(request, reply){
  journals.find(request.query, function (err, data) {
    if(err){
      reply(err);
    } else {
      reply(data)
    }
  });
}

function getJournalsByDate(request, reply){
  var journalDate = parseInt(request.params.date, 10)
    ;
  journals.find({"JOURNPOST_OJ.JP_JDATO":journalDate}, function (err, data) {
    if(err){
      reply(err);
    } else {
      reply(data)
    }
  });
}

function getJournal(request, reply){
  journals.findOne({sakId:request.params.sakId}, function (err, data) {
    if(err){
      reply(err)
    } else {
      reply(data);
    }
  });
}

function getLatestJournals(request, reply){
  getLatestJournalDate(function(error, date){
    if(error){
      reply(error)
    } else {
      if(date.date){
        var journalDate = parseInt(date.date, 10)
          ;
        journals.find({"JOURNPOST_OJ.JP_JDATO":journalDate}, function (err, data) {
          if(err){
            reply(err);
          } else {
            reply(data)
          }
        });
      } else {
        reply([]);
      }
    }
  });
}


module.exports.getJournals = getJournals;

module.exports.getJournalsByDate = getJournalsByDate;

module.exports.getJournal = getJournal;

module.exports.getLatestJournals = getLatestJournals;