const AdminModel = require('../../Models/AdminModel')

const GetAdminById =async (req,res) => {
	const id = req.params.id
	if (id.length !== 24){
		return res.json({
			msg:'Invalid id',
			success:false,
		})
	}else {
		try {
			const admin = await AdminModel.findById(id)
			if (admin === null){
				return res.json({
					msg:'Admin was not found',
					success:false
				})
			}else {
				return res.json({
					msg:'Admin found successfully',
					success:false,
					admin
				})
			}
		}catch (e) {
			console.log(e)
			return res.json({
				msg:'An unexpected error occurred',
				success:false,

			})
		}
	}


}

module.exports = { GetAdminById }
