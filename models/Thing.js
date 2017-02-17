var ObjectID = require('mongodb').ObjectID;
var DB = require('../db/mongo.js');

exports.getOneAndReturn = function (query, queryType, callback) {
    var formedQuery = {
        "_id" : new ObjectID.createFromHexString(query)
    };
    DB.getDBconnection(function (err, db) {
        var collection = db.collection(queryType);
        if (err) {
            callback(err);
        }
        collection.findOne(formedQuery, function (err, doc) {
            if (err) {
                callback(err);
            }
            else {
                // Casting doc['_id'] to string here prevents wierdness during testing
                doc['_id'] = doc['_id'].toString();
                callback(null, doc);
            }
        });
    });
};

exports.postAndReturn = function (post, queryType, callback) {
    DB.getDBconnection(function (err, db) {
        var collection = db.collection(queryType);
        if (err) {
            callback(err);
        }
        collection.insert(post, {safe : true}, function (err, result) {
            if (err) {
                callback(err);
            }
            else {
                // Casting doc['_id'] to string here prevents wierdness during testing
                result[0]['_id'] = result[0]['_id'].toString();
                callback(null, result[0]);
            }
        });
    });
};

exports.getSelection = function (query, queryType, callback) {
    DB.getDBconnection(function (err, db) {
        var collection = db.collection(queryType);
        if (err) {
            callback(err);
        }
        collection.find({}, {limit : parseInt(query, 10)}).toArray(function (err, result) {
            if (err) {
                callback(err);
            }
            else {
                callback(null, result);
            }
        });
    });
};

exports.updateAndReturn = function (id, post, queryType, callback) {
    var formedQuery = {
        "_id" : new ObjectID.createFromHexString(id)
    };
    DB.getDBconnection(function (err, db) {
        var collection = db.collection(queryType);
        if (err) {
            callback(err);
        }
        collection.update(formedQuery, {$set: post}, {w:1}, function (err, result) {
            if (err) {
                callback(err);
            }
            else {
                callback(null, result);
            }
        });
    });
};