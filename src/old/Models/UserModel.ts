import * as mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
        default: ""
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    orders: {
        type: Array,
        required: false,
        default: []
    },

})
export default mongoose.model('users', UserModel)
