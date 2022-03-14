const OrderModel = require('../../Models/OrderModel')
const moment = require('moment')
const {mpesa} = require('../../util/config')


const AddOrder = (req, res) => {
	const {name, email, phoneNumber, userId, address, products, total} = req.body
	console.log(phoneNumber)
	const newOrder = new OrderModel({
		name,
		userId,
		email,
		phoneNumber,
		products,
		total,
		isPaid: false,
		isDelivered: false,
		address,
		orderedOn: moment().format('L'),
		orderedAt: moment().format('LT'),

	})

	newOrder.save()
	.then(() => {
		mpesa
		.lipaNaMpesaOnline({
			BusinessShortCode: "174379",
			Amount: 1,
			PartyA: "254725944658",
			PartyB: "174379",
			PhoneNumber: "254725944658",
			CallBackURL: "https://eda9-105-27-149-170.ngrok.io/order/callback",
			AccountReference: "Account Reference",
			passKey: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
			TransactionType: "CustomerBuyGoodsOnline"

		})
		.then((response) => {
			console.log("Success Response")
			console.log(response);
		})
		.catch((error) => {
			console.log("Error response")
			console.error(error);
		});

		return res.json({
			msg: 'Order added successfully',
			success: true
		})
	})
	.catch((err) => {
		console.log(err)
		return res.json({
			msg: 'An error occurred',
			success: false
		})
	})


}

module.exports = {AddOrder}

