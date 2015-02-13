'use strict';

var db = connect("localhost:27017/tfk");

db.createCollection('journals');

db.journals.ensureIndex({SA_OFFTITTEL: "text", "JOURNPOST_OJ.JP_OFFINNHOLD": "text"}, {"default_language": "nb"});

db.journals.ensureIndex({"JOURNPOST_OJ.JP_JDATO": 1});
