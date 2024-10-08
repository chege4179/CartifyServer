

const OrderMpesaCallBack = (req,res) => {
	console.log("In the callback")
	console.log(req.body)
}
module.exports = { OrderMpesaCallBack }
