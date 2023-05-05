let router = require('express').Router()
let alumno = require('./alumno')

router.use('/alumno', alumno)

module.exports = router;