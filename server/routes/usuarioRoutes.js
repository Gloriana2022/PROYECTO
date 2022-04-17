//Se agrega el express y las rutas
const express = require("express")
const router = express.Router();

const auth = require("../middleware/auth");
const {permit}  = require("../middleware/authorization");

//Se incluye todos lo definido en el controller 
const usuarioController = require("../controller/usuariocontroller");
//Definicion de las rutas de usuario
//ruta para obtener todas las usuarios de la base de datos 
router.get("/",auth,permit("admin"), usuarioController.get);
router.get("/:id",auth, usuarioController.getById);
router.post("/", auth, usuarioController.create);
router.delete("/:id",auth, usuarioController.delete);
router.put("/:id",auth, usuarioController.update);
//
//
router.post("/signup", usuarioController.signup);
router.post("/signin", usuarioController.signin);
//
module.exports = router;
//