const mongoose = require('mongoose')

const AdminModel = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	phoneNumber:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	accountType:{
		type:String,
		required:true
	},
})

module.exports = mongoose.model('admin',AdminModel)
