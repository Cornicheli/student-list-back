let alumnos = [
    {
        "nombre" : "gabriel",
        "apellido": "cornide",
        "edad": 6
    },
    {
        "nombre" : "agustin",
        "apellido": "cornide",
        "edad": 8
    },
    {
        "nombre" : "thiago",
        "apellido": "cornide",
        "edad": 8
    },
]

require('dotenv').config()
require('../config/database')
const Alumnos = require("../models/Alumnos")

alumnos.forEach((e) => {
    Alumnos.create({
        nombre: e.nombre,
        apellido: e.apellido,
        edad: e.edad,
    });
});