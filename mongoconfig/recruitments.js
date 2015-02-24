'use strict';

var db = connect('localhost:27017/tfk');

db.createCollection('recruitments');

db.recruitments.ensureIndex({'jobid': 1});
