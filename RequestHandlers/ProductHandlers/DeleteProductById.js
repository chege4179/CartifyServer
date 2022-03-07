

const DeleteProductById = (req,res) => {
	const id = req.params.id
	return res.json({
		msg:'Delete request received',
		success:true,

	})
}

module.exports = { DeleteProductById }
