const UserModel = require('../../Models/UserModel')
const bcrypt = require('bcryptjs')

const LoginUser = async (req,res) => {
	const { email,password } = req.body
	try{
		const findUser = await UserModel.findOne({ email })
		if (findUser === null){
			return res.json({
				msg:'No user with this email address exists',
				success:false
			})
		}
		const hashpassword = findUser.password
		if (bcrypt.compareSync(password,hashpassword)){
			return res.json({
				msg:'Login successful',
				success:true,
				user:findUser,
			})
		}else {
			return res.json({
				msg:'Wrong credentials',
				success:false
			})
		}

	}catch (e){
		console.log(e)
		return res.json({
			msg:"An error ocurred",
			success:false
		})
	}


}

module.exports = { LoginUser }
