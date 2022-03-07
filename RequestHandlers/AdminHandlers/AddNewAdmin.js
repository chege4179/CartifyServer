const AdminModel = require('../../Models/AdminModel')
const bcrypt = require('bcryptjs')



const AddNewAdmin = (req,res) => {
	const { name,phoneNumber,email,password,accountType } = req.body
	const salt = bcrypt.genSaltSync(10)
	const hashpassword = bcrypt.hashSync(password,salt)
	try {
		const newAdmin = new AdminModel({...req.body, password: hashpassword})
		newAdmin.save()
		.then((admin) => {
			return res.json({
				msg:'Admin added successfully',
				success:true,
				admin
			})
		})
		.catch((err) => {
			if (err.code === 11000){
				return res.json({
					msg:"A user with a similar email address already exists",
					success:false
				})
			}else {
				console.log(err)
				return res.json({
					msg:err.message || "An error occurred",
					success:false
				})
			}
		})

	}catch (e){
		console.log(e)
		return res.json({
			msg:e.message ||"An error occurred",
			success:false
		})
	}
}

module.exports = { AddNewAdmin }
