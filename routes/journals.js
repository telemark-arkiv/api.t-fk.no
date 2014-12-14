'use strict';

var handlers = require('../handlers/journals')
  , routes
  ;

routes = [
  {
    method: 'GET',
    path: '/journals',
    handler: handlers.getJournals,
    config: {
      cors:true
    }
  },
  {
    method: 'GET',
    path: '/journals/collection/{saSeknr}',
    handler: handlers.getJournalsCollection,
    config: {
      cors:true
    }
  },
  {
    method: 'GET',
    path: '/journals/date/distinct',
    handler: handlers.getJournalsDatesDistinct,
    config: {
      cors:true
    }
  },
  {
    method: 'GET',
    path: '/journals/date/{date}',
    handler: handlers.getJournalsByDate,
    config: {
      cors:true
    }
  },
  {
    method: 'GET',
    path: '/journals/department/{department}',
    handler: handlers.getJournalsByDepartment,
    config: {
      cors:true
    }
  },
  {
    method: 'GET',
    path: '/journals/latest',
    handler: handlers.getLatestJournals,
    config: {
      cors:true
    }
  },
  {
    method: 'GET',
    path: '/journal/{jpSeknr}',
    handler: handlers.getJournal,
    config: {
      cors:true
    }
  }
]

module.exports = routes;