const ProductModel = require('../../Models/ProductModel')

const GetProductById = (req,res) => {
    const id = req.params.id
    ProductModel.findById(id,{},{},(err,product) => {
        if (err){
            console.log(err)

        }else {
            if (product === null){
                return res.json({
                    msg:'No such product was found',
                    success:false
                })
            }
            return res.json({
                msg:'Product fetched successfully',
                product,
                success:true
            })
        }
    })
}

module.exports = { GetProductById }
