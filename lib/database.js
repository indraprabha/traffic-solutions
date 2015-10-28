
'use strict';
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var nconf = require('nconf');
nconf.argv()
    .env('_')
    .file('./config/config.json');

var database = function () {
    return {
        config: function () {
            var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };
            var mongodbUri = 'mongodb://' +
                nconf.get('mongodb:username') + ':' +
                nconf.get('mongodb:password') + '@' +
                nconf.get('mongodb:hostname') + ':' +
                nconf.get('mongodb:port') + '/' +
                nconf.get('mongodb:database');

            var mongooseUri = uriUtil.formatMongoose(mongodbUri);
            console.log("Connecting to "+mongooseUri);
            mongoose.connect(mongooseUri, options);
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function callback() {
                console.log('db connection open');
            });
        }
    };
};

/*
var $data = require('jaydata');
var Dish = require('../models/dish');

var database = function () {
    $data.Class.defineEx('Database', [$data.EntityContext, $data.ServiceBase], null, {
        Dishes: {type: $data.EntitySet, elementType: Dish}
    });

    return new Database({
        name: 'mongoDB',
        databaseName: 'MealBasketDB',
        address: 'localhost',
        port: 27017
    });
}
*/
module.exports = database();
