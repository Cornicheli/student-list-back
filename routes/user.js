const router = require("express").Router()
const schema = require("../schema/user")
let { registrar, verificar, ingresar } = require('../controllers/user')
let { accountExistsSignUp } = require("../middlewares")
let  validate  = require("../middlewares/validator")
// let  accountExistsSignUp  = require("../middlewares/accountExistsSignUp")

router.post('/signup',  validate(schema), accountExistsSignUp, registrar)
// router.post("/signin", ingresar)
router.get('/verify/:code', verificar)
module.exports = router