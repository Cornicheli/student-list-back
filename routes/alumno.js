let router = require('express').Router()
let { create } = require('../controllers/alumnos')

router.route('/create').post(create)

module.exports = router;