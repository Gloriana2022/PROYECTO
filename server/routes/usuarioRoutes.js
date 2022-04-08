//Se agrega el express y las rutas
const express = require("express")
const router = express.Router();

//Se incluye todos lo definido en el controller 
const usuarioController = require("../controller/usuariocontroller");
//Definicion de las rutas de usuario
//ruta para obtener todas las usuarios de la base de datos 
router.get("/", usuarioController.get);
router.get("/:id", usuarioController.getById);
router.post("/", usuarioController.create);
router.delete("/:id", usuarioController.delete);
router.put("/:id", usuarioController.update);
//
//
module.exports = router;
//