'use strict';

const MyDrinks = require('../model/drink.mongoose');

const createFavoriteDrink = async (req,res) => {
    const {
        strDrink,
        strDrinkThumb,
        idDrink
    }=req.body;
    MyDrinks.find({strDrink:strDrink} ,(error,data) => {
        const slug = strDrink.toLowerCase().split(' ').join('-');
        if(data.length > 0) {
            res.send('data is already exits');
        }else{
            const newMyDrinks= new MyDrinks ({
                strDrink: strDrink,
                strDrinkThumb: strDrinkThumb,
                idDrink:idDrink
            })
            newMyDrinks.save();
            res.send(newMyDrinks);
        }
    })
}

const getFavoriteDrinksData = async (req, res) =>{

    MyDrinks.find({} ,(err, data) =>{
        res.send(data);
    })

}

const deleteFavoriteData= async (req, res) =>{
    const slug = req.params.slug;
    MyDrinks.deleteOne({slug:slug} ,(error,data) =>{
        if (error) {
            res.send(error);
        }else{
            res.send(data);
        }
    })
}
const updateFavoriteDrink = async (req, res) =>{
const id =req.params.slug;
const {strDrink} =req.body
MyDrink.findOneAndUpdate({_id:id} ,{strDrink:strDrink}, (error,data) => {
    res.send(data);
})
}
module.exports = {
    createFavoriteDrink,
    getFavoriteDrinksData,
    deleteFavoriteData,
    updateFavoriteDrink
}