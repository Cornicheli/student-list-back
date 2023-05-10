const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
})

const Alumnos = mongoose.model('alumnos', schema)
module.exports = Alumnos