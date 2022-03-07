const mongoose = require('mongoose')
const ProductModel = require('./ProductModel')


const WishListModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    products:[ProductModel]

})
module.exports = mongoose.model('wishlists',WishListModel)
