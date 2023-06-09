let users = [
    {
        nombre: "Eric",
        apellido: "Rodriguez",
        email: "feric.rodriguez@gmail.com",
        password: "developer1234",
        turno: "tarde",
        code: "hola1234",
        verified: true,
        logged: true,
    },
];

require("dotenv").config();
require("../../config/database");

const User = require("../User");
    users.forEach((e) => {
        User.create({
            nombre: e.name,
            apellido: e.lastName,
            email: e.email,
            password: e.password,
            turno: e.turno,
            verified: e.verified,
            logged: e.logged,
            code: e.code
        });
});