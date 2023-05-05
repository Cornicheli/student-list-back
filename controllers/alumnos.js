const Alumnos = require('../models/Alumnos')

const controller = {
    create: async (req, res) =>{
        try {
            let new_alumno = await Alumnos.create(req.body)
            res.status(201).json({
                id : new_alumno._id,
                success: true,
                message: "alumno creado"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "alumno no creado"

            })
        }
    },
    reade: async (req, res) =>{
        try {
            
        } catch (error) {
            
        }
    },
    update: async (req, res) =>{
        try {
            
        } catch (error) {
            
        }
    },
    destroy: async (req, res) =>{
        try {
            
        } catch (error) {
            
        }
    },
}

module.exports = controller