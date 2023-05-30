const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    turno: {type: String, required: true},
    horario: {type: String, required: true},
    grupo: {type: String, required: true},
})

const Alumnos = mongoose.model('alumnos', schema)
module.exports = Alumnos