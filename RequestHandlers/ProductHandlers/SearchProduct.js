const ProductModel = require('../../Models/ProductModel')
const { productsIndex } = require('../../util/config')

const SearchProduct  = async (req,res) => {
	try{
		const { searchTerm } = req.params
		const allProducts = await ProductModel.find({  })
		const searchProducts =allProducts.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
		return res.json({
			msg:"Success",
			success:true,
			products:searchProducts,
		})
	}catch (e){
		console.log(e)
		return res.json({
			msg:'An error ocurred during search',
			success:false
		})
	}
}

const FullTextSearch =async (req,res) => {
	try{
		const { searchTerm } = req.params
		ProductModel.fuzzySearch(searchTerm,(err,searchProducts) => {
			if (err){
				console.log(err)
				return res.json({
					msg:"Success",
					success:false,

				})
			}else {
				return res.json({
					msg:"Success",
					success:true,
					products:searchProducts,
				})
			}
		})


	}catch (e){
		console.log(e)
		return res.json({
			msg:'An error ocurred during search',
			success:false
		})
	}
}
const AlgoliaSearch = async (req,res) => {
	const { searchTerm } = req.params



	// only query string
	productsIndex.search(searchTerm,{
		// attributesToRetrieve: [
		// 	'name', 'description',"catgeory",
		// 	"price","category","reviews","rating",
		// 	"onOffer","images","__v","_id" ],
		hitsPerPage: 20,
	}).then(({ hits }) => {

		const searchProducts = hits.map((hit) => {
			return {
				_id:hit._id.$oid,
				name:hit.name,
				price:hit.price,
				description:hit.description,
				onOffer:hit.onOffer,
				category:hit.category,
				reviews:hit.reviews,
				rating:hit.rating,
				offerPrice:hit.offerPrice,
				offerDuration:hit.offerDuration,
				images:hit.images,
				__v:0,
			}
		})
		return res.json({
			msg:`${hits.length} search results found for ${searchTerm}`,
			success:true,
			products:searchProducts,


		})
	})
	.catch((err) => {
		console.log(err)
		return res.json({
			msg:'An unexpected error occurred',
			success:false,
			products:[]

		})
	})
}
module.exports = { SearchProduct,FullTextSearch,AlgoliaSearch }
