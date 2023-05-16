const router = require("express").Router()
const schema = require("../schema/user")
const passport = require("../config/passport");
let  validate  = require("../middlewares/validator")
const mustSignin = require("../middlewares/mustSignin");
let { register, verify, login, loginWithToken, logOut } = require('../controllers/user')
let { accountExistsSignUp, accountExistsSignIn, accountHasBeenVerified } = require("../middlewares")

router.post('/signup',  validate(schema), accountExistsSignUp, register)
router.get('/verify/:code', verify)
router.post("/signin", accountExistsSignIn, accountHasBeenVerified, login)
router.post('/token',  passport.authenticate("jwt", { session: false }), mustSignin, loginWithToken)
router.put('/logout', passport.authenticate("jwt", { session: false }), logOut)
module.exports = router