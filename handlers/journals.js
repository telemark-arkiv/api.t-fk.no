'use strict';

var mongojs = require('mongojs')
  , config = require('../config')
  , db = mongojs(config.DB)
  , journals = db.collection('journals')
  ;

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

function getJournalLatest(request, reply){
  journals.find().sort({"JOURNPOST_OJ.JP_JDATO":-1}).limit(1, function (err, data) {
    if(err){
      reply(err)
    } else {
      reply(data);
    }
  });
}


module.exports.getJournals = getJournals;

module.exports.getJournalsByDate = getJournalsByDate;

module.exports.getJournal = getJournal;

module.exports.getJournalLatest = getJournalLatest;