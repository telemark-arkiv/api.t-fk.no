'use strict';

var handlers = require('../handlers/journals')
  , routes
  ;

routes = [
  {
    method: 'GET',
    path: '/journals',
    handler: handlers.getJournals
  },
  {
    method: 'GET',
    path: '/journals/date/distinct',
    handler: handlers.getJournalsDatesDistinct
  },
  {
    method: 'GET',
    path: '/journals/date/{date}',
    handler: handlers.getJournalsByDate
  },
  {
    method: 'GET',
    path: '/journals/latest',
    handler: handlers.getLatestJournals
  },
  {
    method: 'GET',
    path: '/journal/{jsSeknr}',
    handler: handlers.getJournal
  }
]

module.exports = routes;