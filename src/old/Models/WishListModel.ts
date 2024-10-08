import * as mongoose from "mongoose";
import ProductModel from "./ProductModel";


const WishListModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    products: [ProductModel]

})


export default mongoose.model('wishlists', WishListModel)
