const bcrypt = require("bcryptjs");

function validateMobileNumber(num){
	let numsize = num.length
	let number = Number(num)
	let leftside = num.substring(0,numsize - 9)
	let rightside = num.substring(numsize - 9)
	if (numsize > 12){
		return false
	}
	if (isNaN(number)){
		return false
	}
	return rightside.length === 9;
}

function encryptedPassword(password){
	const salt = bcrypt.genSaltSync(10)
	const hashpassword = bcrypt.hashSync(password, salt)
	return hashpassword
}
module.exports = { validateMobileNumber ,encryptedPassword}
