const Joi = require("joi");

const schema = Joi.object({
  nombre: Joi.string().required().min(3).max(30).messages({
    "string.base": "Por favor, ingresa palabras",
    "any.required": "Este campo es obligatorio, por favor ingrésalo",
    "string.min":"Por favor, ingresa tu nombre completo",
    "string.max": "Por favor, verifica tu nombre",
  }),
  apellido: Joi.string().required().min(3).max(30).messages({
    "string.base": "Por favor, ingresa palabras",
    "any.required": "Este campo es obligatorio, por favor ingrésalo",
    "string.min":"Por favor, ingresa tu apellido completo",
    "string.max": "Por favor, verifica tu apellido",
  }),
  turno: Joi.string().required().min(3).max(20).messages({
    "string.base": "Por favor, el turno",
    "any.required": "Este campo es obligatorio, por favor ingrésalo",
    "string.min":"Por favor, ingresa tu turno",
  }),
  email: Joi.string().required().min(3).max(30).email().messages({
    "string.base": "Por favor, ingresa palabras",
    "any.required": "Por favor, ingresa tu correo electrónico completo",
    "string.min": "Por favor, verifica tu correo electrónico",
    "string.max": "Por favor, ingresa palabras",
  }),
  password: Joi.string().required().min(3).max(40).messages({
    "string.base": "Por favor, ingresa palabras",
    "any.required": "Este campo es obligatorio, por favor ingrésalo",
    "string.min": "Por favor, ingresa tu contraseña completa",
    "string.max": "Por favor, verifica tu contraseña"
  }),
});
module.exports = schema;
