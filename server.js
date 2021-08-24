'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
const PORT= process.env.PORT || 3050;
const getDrinkData =require('./controller/drink.controller')

const mongoose = require('mongoose');
const crud= require('./controller/drinkCrud.controller')
mongoose.connect('mongodb://localhost:27017/DRINK', { useUnifiedTopology: true , useNewUrlParser: true});

//http://localhost:3050/drink
server.get('/drink', getDrinkData);

// //http://localhost:3050/test
server.get('/test',(req, res) => {
    res.send('helllllllo there ')
})



/////////////////CRUD////////////////////

//http://localhost:3050/drink/favorite

server.post('/drink/favorite' ,crud.createFavoriteDrink )

server.get('/drink/favorite' , crud.getFavoriteDrinksData)



//https://localhost/drink/favorite/:slug
server.delete('/drink/favorite/:slug' ,crud.deleteFavoriteData)

server.put('/drink/favorite/:slug' ,crud.updateFavoriteDrink )

















server.listen(PORT ,() => {
    console.log(`LISTING TO THE ${PORT} `)
})