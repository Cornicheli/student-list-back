let profesores = [
    {
        "nombre" : "franco",
        "apellido": "nose",
        "role": "profesor",
        "id": "6452b0af3b640185ed48a4ba",
    },
    {
        "nombre" : "noraly",
        "apellido": "nose1",
        "role": "profesor",
        "id" :"6452b0af3b640185ed48a4bb"

    },
    {
        "nombre" : "nadia",
        "apellido": "nose1",
        "role": "profesor",
        "id" : "6452b0af3b640185ed48a4bc"
    },

]

require('dotenv').config()
require('../config/database')
const Profesor = require("../models/Profesor")

profesores.forEach((e) =>{
    Profesor.create({
        nombre: e.nombre,
        apellido: e.apellido,
        role: e.role,
        id: e.id,
    })
})