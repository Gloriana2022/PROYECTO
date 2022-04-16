const jwt = require("jsonwebtoken");
const userModel = require("../models/usuario");
//Se obtiene las variables de entorno
const config = process.env;

//Se verifica que el token sea valido
const auth = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("Un token es requerido para la autenticación");
  }
  try {
    const { user } = jwt.verify(token, config.SECRETWORDJWT);
    console.log(user);
    req.user = await userModel.findOne({ user }).exec();
  } catch (err) {
    return res.status(401).send("El token no es valido");
  }
  return next();
};

module.exports = auth;