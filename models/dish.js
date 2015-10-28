'use strict';

var mongoose = require('mongoose');
var dishModel = function () {
    //Define a simple schema for dishes.
    // TODO: price needs to have 2 point decimal
    var dishSchema = mongoose.Schema({
        name: String,
        description: String,
        price: Number,
        date: Date,
        quantity: String
    });

    //Format the price of the product to show a dollar sign, and two decimal places
    dishSchema.methods.prettyPrice = function () {
        return (this && this.price) ? 'Rs. ' + this.price.toFixed(2) : 'Free';
    };

    return mongoose.model('Dish', dishSchema);
};

module.exports = new dishModel();
