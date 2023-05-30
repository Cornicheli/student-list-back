const router = require('express').Router()

const alumno = require('./alumno')
const user = require('./user')

router.use('/alumno', alumno)
router.use('/auth', user)

module.exports = router;