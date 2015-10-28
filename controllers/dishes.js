'use strict';

var Dish = require('../models/dish');


module.exports = function (app) {

    var model = new Dish();

    app.get('/', function (req, res) {

        Dish.find(function (err, dishArray) {
            if (err) {
                console.log(err);
            }
            dishArray.forEach(function(dish) {
                dish.prettyPrice = dish.prettyPrice();
            });
            var model = {
                dishes: dishArray,
                active: 'admin'
            };
            res.render('dishes', model);
        });

    });

    app.post('/', function (req, res) {

        if(req.body.item_id) {
            // TODO: Incorporate Edit record
            Dish.find({_id: req.body.item_id}).remove(function (err) {
                console.log('Removing item with id: ' + req.body.item_id);
                if (err) {
                    console.log('Remove error: ', err);
                }
                res.redirect('/dishes');
            });
        } else {

            var name = req.body.name && req.body.name.trim();
            var price = parseFloat(req.body.price, 10);
            var description = req.body.description && req.body.description.trim();
            var quantity = req.body.quantity && req.body.quantity.trim();

            //Some very lightweight input checking
            if (name === '' || isNaN(price)) {
                // TODO: Handle #BadInput to throw error message
                res.redirect('/dishes#BadInput');
                return;
            }

            var newDish = new Dish({
                name: name,
                price: price,
                description: description,
                quantity: quantity
            });

            /* The call back recieves to more arguments ->product/s that is/are added to the database
             and number of rows that are affected because of save, which right now are ignored
             only errors object is consumed*/
            newDish.save(function (err) {
                if (err) {
                    console.log('save error', err);
                }

                res.redirect('/dishes');
            });
        }
    });

};
