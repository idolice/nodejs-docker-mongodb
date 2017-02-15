
var MongoClient = require('mongodb').MongoClient;
var dbConfig = require('../config/db');

exports.getDBconnection = function (callback) {
    var connectionString = 'mongodb://'+dbConfig.hostname+':'+dbConfig.port+'/'+dbConfig.collection;

    MongoClient.connect(connectionString,callback);
}