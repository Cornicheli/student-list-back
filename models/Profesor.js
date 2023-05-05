const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    // role: {type: String, required: true},
})

const Profesor = mongoose.model('profesor', schema)
module.exports = Profesor