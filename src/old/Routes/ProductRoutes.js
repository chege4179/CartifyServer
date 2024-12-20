const Express = require('express')
const router = Express.Router()
const { AddNewProduct } =require('../RequestHandlers/ProductHandlers/AddNewProduct')
const {GetProductById} = require("../RequestHandlers/ProductHandlers/GetProductById");
const {GetAllProducts} = require("../RequestHandlers/ProductHandlers/GetAllProducts");
const {EditProductInfo} = require("../RequestHandlers/ProductHandlers/EditProductInfo");
const {DeleteProductById} = require("../RequestHandlers/ProductHandlers/DeleteProductById");
const {SearchProduct, FullTextSearch, AlgoliaSearch} = require("../RequestHandlers/ProductHandlers/SearchProduct");

router.get('/search/:searchTerm',SearchProduct)
router.get('/search/v1/:searchTerm',FullTextSearch)
router.get('/search/v2/:searchTerm',AlgoliaSearch)
router.post('/add',AddNewProduct)
router.put('/edit/:id',EditProductInfo)
router.get('/all',GetAllProducts)
router.get('/single/:id',GetProductById)
router.delete('/delete/:id',DeleteProductById)


module.exports = router;
