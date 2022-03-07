const UserModel = require("../../Models/UserModel")

const GetAllUsers = (req,res) => {
	UserModel.find({},{},{},(err,users) => {
		if (err){
			console.log(err)
			return res.json({
				msg:err.message || "An error occurred while fetching users",
				success:false
			})
		}else {
			return res.json({
				msg:'Users fetched successfully',
				success:true,
				users:users
			})
		}
	})

}
module.exports = { GetAllUsers }
