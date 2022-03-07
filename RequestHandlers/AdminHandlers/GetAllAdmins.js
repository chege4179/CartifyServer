
const AdminModel = require('../../Models/AdminModel')

const GetAllAdmins = (req,res) => {
	AdminModel.find({},{},{},(err,admins) => {
		if (err){
			console.log(err)
			return res.json({
				msg:err.message || "An error occurred while fetching admins",
				success:false
			})
		}else {
			return res.json({
				msg:'Admins fetched successfully',
				success:true,
				admins:admins
			})
		}
	})
}
module.exports = { GetAllAdmins }
