const AdminModel = require('../../Models/AdminModel')
const bcrypt = require('bcryptjs')


const LoginAdmin =async (req,res) => {
	const { email,password } = req.body
	try{
		const findUser = await AdminModel.findOne({ email })
		if (findUser ===null){
			return res.json({
				msg:'Wrong credentials',
				success:false
			})
		}else {
			if (bcrypt.compareSync(password,findUser.password)){
				return res.json({
					msg:'Login Successful',
					success:true,
					user:findUser
				})
			}else {
				return res.json({
					msg:'Wrong Password',
					success:false,

				})
			}
		}
	}catch (e) {

		return res.json({
			msg:"An error occurred",
			success:false,
			err:e
		})

	}
}

module.exports = { LoginAdmin }
