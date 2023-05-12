const router = require("express").Router()
const schema = require("../schema/user")
let  validate  = require("../middlewares/validator")
let { registrar } = require('../controllers/user')
// let { accountExistsSignUp, validator } = require("../middlewares")
let  accountExistsSignUp  = require("../middlewares/accountExistsSignUp")

router.post("/",  validate(schema), accountExistsSignUp, registrar)
module.exports = router