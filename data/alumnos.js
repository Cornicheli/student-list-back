let alumnos = [
    {
        "nombre" : "gabriel",
        "apellido": "cornide",
        "edad": 6,
        "turno" : "tarde"
    },
    {
        "nombre" : "agustin",
        "apellido": "cornide",
        "edad": 8,
        "turno" : "tarde"
    },
    {
        "nombre" : "thiago",
        "apellido": "cornide",
        "edad": 8,
        "turno" : "tarde"
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
        turno: e.turno
    });
});