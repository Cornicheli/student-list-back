const router = require('express').Router()

const alumno = require('./alumno')
const user = require('./user')

router.use('/alumno', alumno)
router.use('/register', user)

module.exports = router;