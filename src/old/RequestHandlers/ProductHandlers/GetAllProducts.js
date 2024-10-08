const ProductModel = require('../../Models/ProductModel')

const GetAllProducts = async (req,res) => {

    const { offset,limit } = req.query
    try{
        const products = await ProductModel.paginate({},{ offset:offset,limit:limit })
        return res.json({
            success:true,
            msg:'Products fetched successfully',
            products:products.docs,
        })
    }catch (e) {
        console.log(e)
        return res.json({
            msg:'An error occurred',
            success:false
        })

    }

    // ProductModel.find({  },(err,products) => {
    //     if (err){
    //         return res.json({
    //             msg:'An error occurred',
    //             success:false
    //         })
    //     }else {
    //         return res.json({
    //             success:true,
    //             msg:'Products fetched successfully',
    //             products,
    //         })
    //     }
    // })
}
module.exports = { GetAllProducts }
