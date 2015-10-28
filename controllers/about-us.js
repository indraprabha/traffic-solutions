'use strict';

var AboutUsModel = require('../models/about-us');


module.exports = function (router) {

    var model = new AboutUsModel();

    router.get('/', function (req, res) {


        res.render('about-us', model);


    });

};
