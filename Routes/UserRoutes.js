const Express = require('express')
const router = Express.Router()
const {GetAllUsers} = require("../RequestHandlers/UserHandlers/GetAllUsers");
const {SignUpUser} = require("../RequestHandlers/UserHandlers/SignUpUser");
const {LoginUser} = require("../RequestHandlers/UserHandlers/LoginUser");
const {PasswordResetUser} = require("../RequestHandlers/UserHandlers/PasswordResetUser");
const {EditUser} = require("../RequestHandlers/UserHandlers/EditUser");
const {DeleteUser} = require("../RequestHandlers/UserHandlers/DeleteUser");
const { body } = require('express-validator')

router.get('/all',GetAllUsers)
router.post('/login',LoginUser)
router.post('/signup',body("email").isEmail(),SignUpUser)
router.put('/passwordreset',PasswordResetUser)
router.put('/edit/:id',EditUser)
router.delete('/delete/:id',DeleteUser)

module.exports = router;
