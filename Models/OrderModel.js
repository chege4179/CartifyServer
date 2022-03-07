const mongoose = require('mongoose')

const OrderModel = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	userId: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String,
		required: true
	},
	products: {
		type: Array,
		required: true
	},
	total: {
		type: Number,
		required: true,
	},
	isPaid: {
		type: Boolean,
		required: true
	},
	isDelivered: {
		type: Boolean,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	orderedOn: {
		type: String,
		required: true
	},
	orderedAt: {
		type: String,
		required: true
	}

})
module.exports = mongoose.model('orders', OrderModel)
