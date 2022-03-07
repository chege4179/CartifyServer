const OrderModel = require('../../Models/OrderModel')


const getAllOrders = async (req,res) => {
	try{
		const orders = await OrderModel.find({  })
		return res.json({
			msg:'All orders fetched successfully',
			success:true,
			orders:orders
		})

	}catch (e){
		console.log(e)
		return res.json({
			msg:'An error ocurred',
			success:false,
		})
	}

}

module.exports = { getAllOrders }
