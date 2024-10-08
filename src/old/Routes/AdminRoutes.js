const Express = require('express')
const router = Express.Router()
const {GetAllAdmins} = require("../RequestHandlers/AdminHandlers/GetAllAdmins");
const {AddNewAdmin} = require("../RequestHandlers/AdminHandlers/AddNewAdmin");
const {EditAdminById} = require("../RequestHandlers/AdminHandlers/EditAdminById");
const {GetAdminById} = require("../RequestHandlers/AdminHandlers/GetAdminById");
const {DeleteAdminById} = require("../RequestHandlers/AdminHandlers/DeleteAdminById");
const {LoginAdmin} = require("../RequestHandlers/AdminHandlers/LoginAdmin");



router.get('/all',GetAllAdmins)
router.post('/add',AddNewAdmin)
router.put('/edit/:id',EditAdminById)
router.get('/single/:id',GetAdminById)
router.delete('/delete/:id',DeleteAdminById)
router.post('/login',LoginAdmin)


module.exports = router
