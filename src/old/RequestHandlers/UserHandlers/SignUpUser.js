const UserModel = require('../../Models/UserModel')
const { validationResult } = require('express-validator')
const {validateMobileNumber, encryptedPassword} = require("../../util/util");
const bcrypt = require('bcryptjs')

const SignUpUser = async (req,res) => {
	const { fullname,phoneNumber,password,email,address } = req.body
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.json({
			msg:'Please enter a valid email address',
			success:false,
		});
	}
	if (!validateMobileNumber(phoneNumber)){
		return res.json({
			msg:"Please enter  a valid mobile phone number",
			success:false
		})
	}
	try{
		const existingUser = await UserModel.findOne({ email })
		if (existingUser){
			return res.json({
				msg:'A user with the similar email address already exists',
				success:false
			})
		}else {

			const newUser = new UserModel({
				...req.body,
				password:encryptedPassword(password)
			})
			newUser
			.save()
			.then(() => {
				return res.json({
					msg:'New User created successfully',
					success:true
				})

			})
			.catch((err) => {
				console.log(err)
				return res.json({
					msg:'An unexpected error occurred on the cartifyserver',
					success:false
				})
			})
		}
	}catch (e){

	}



}
module.exports = { SignUpUser }
