import * as mongoose from "mongoose";



const ProductModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    images:{
        type:Array,
        required:true,
        default:[]
    },
    onOffer:{
        type:Boolean,
        default:false,
        required:true,
    },
    offerPrice:{
        type:Number,
        required:false,
        default:0
    },
    offerDuration:{
        type:String,
        default:"",
        required:false,
    },
    rating:{
        type:Number,
        required:true,
        default:0,
    },
    reviews:{
        type:Array,
        required:true,
        default:[]
    }
})

export default  mongoose.model('products',ProductModel)
