let users = [
    {
        nombre: "Eric",
        apellido: "Rodriguez",
        role: "profesor",
        email: "feric.rodriguez@gmail.com",
        password: "developer1234",
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
            role: e.role,
            email: e.email,
            password: e.password,
            verified: e.verified,
            logged: e.logged,
            code: e.code
        });
});