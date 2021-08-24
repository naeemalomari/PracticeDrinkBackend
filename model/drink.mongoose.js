'use strict';

const mongoose = require('mongoose');

const drinkSchema= mongoose.Schema({
    strDrink : {
        type :String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    slug : {
        type :String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    strDrinkThumb: String,
    idDrink: String,
})

const favoriteDrinkModel = mongoose.model('MyDrinks' ,drinkSchema);
module.exports = favoriteDrinkModel;