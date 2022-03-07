const mongoose = require('mongoose')
const OrderModel = require('../Models/OrderModel')

const UserModel = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:false,
        default:""
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    orders:{
        type:Array,
        required:false,
        default:[]
    },

})
module.exports = mongoose.model('users',UserModel)
