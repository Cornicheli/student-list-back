const Alumnos = require("../models/Alumnos");

const controller = {
  create: async (req, res) => {
    try {
      let new_alumno = await Alumnos.create(req.body);
      res.status(201).json({
        id: new_alumno._id,
        success: true,
        message: "alumno creado",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "alumno no creado",
      });
    }
  },
  read: async (req, res) => {
    try {
      let all = await Alumnos.find();
      res.status(200).json({
        res: all,
        success: true,
        message: "alumnos encontrados",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "alumno no creado",
      });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let one = await Alumnos.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (one) {
        res.status(200).json({
          id: one._id,
          success: true,
          message: "alumno modificado",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "alumno no encontrado",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;

    try {
      let one = await Alumnos.findOneAndDelete({ _id: id });
      if (one) {
        res.status(200).json({
          id: one._id,
          success: true,
          message: "alumno eliminado",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "alumno no encontrado",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = controller;
