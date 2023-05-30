const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email:{type:String, required:true},
    password:{type:String, required:true} ,
    // turno: {type: String, required: true},
    code:{type:String, required:true} ,
    verified:{type:Boolean, required:true},
    logged:{type:Boolean, required:true } ,
})

const User = mongoose.model('user', schema)
module.exports = User