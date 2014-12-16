'use strict';

var mongojs = require('mongojs')
  , crypto = require('browserify-cryptojs')
  , config = require('../config')
  , db = mongojs(config.DB)
  , journals = db.collection('journals')
  ;

function decryptPhrase(encrypted){
  var passphrase = 'SoylentGreenIsPeople';
  var decrypted = crypto.AES.decrypt(encrypted, passphrase).toString();

  return decrypted;
}

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

function getJournalsByDepartmentDistinct(request, reply){
  journals.distinct("JOURNPOST_OJ.JP_ANSVAVD", function (err, data) {
    if(err){
      reply(err);
    } else {
      reply(data)
    }
  });
}

function getJournalsByDepartment(request, reply){
  var department = decryptPhrase(request.params.department)
    , q = {"JOURNPOST_OJ.JP_ANSVAVD":department}
    ;
  if(request.query.date){
    var journalDate = parseInt(request.query.date, 10)
      ;
    q["JOURNPOST_OJ.JP_JDATO"] = journalDate;
  }
  journals.find(q, function (err, data) {
    if(err){
      reply(err);
    } else {
      reply(data)
    }
  });
}

function getJournalsDatesDistinct(request, reply){
  journals.distinct("JOURNPOST_OJ.JP_JDATO", function (err, data) {
    if(err){
      reply(err);
    } else {
      reply(data)
    }
  });
}

function getJournalsCollection(request, reply){
  var saSeknr = parseInt(request.params.saSeknr, 10);
  journals.find({"SA_SEKNR":saSeknr}, function (err, data) {
    if(err){
      reply(err)
    } else {
      reply(data);
    }
  });
}

function getJournal(request, reply){
  var jpSeknr = parseInt(request.params.jpSeknr, 10);
  journals.find({"JOURNPOST_OJ.JP_SEKNR":jpSeknr}, function (err, data) {
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

module.exports.getJournalsDatesDistinct = getJournalsDatesDistinct;

module.exports.getJournalsByDepartment = getJournalsByDepartment;

module.exports.getJournalsByDepartmentDistinct = getJournalsByDepartmentDistinct;

module.exports.getJournalsCollection = getJournalsCollection;

module.exports.getJournal = getJournal;

module.exports.getLatestJournals = getLatestJournals;