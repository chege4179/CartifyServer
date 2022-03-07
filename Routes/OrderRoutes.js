const Express = require('express')
const router = Express.Router()
const {AddOrder} = require("../RequestHandlers/OrderHandlers/AddOrder");
const {getAllOrders} = require("../RequestHandlers/OrderHandlers/GetAllOrders");

router.post('/add',AddOrder)
router.get('/all',getAllOrders)
router.post('/callback',getAllOrders)

module.exports = router;
