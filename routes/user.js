const router = require("express").Router()
const schema = require("../schema/user")
// let  validator  = require("../middlewares/validator")
let { registro } = require('../controllers/user')
let { accountExistsSignUp, validator } = require("../middlewares")
// let  accountExists  = require("../middlewares/accountExistsSignUp")

router.post("/mail",  validator(schema), accountExistsSignUp, registro)
module.exports = router 