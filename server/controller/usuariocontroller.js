//Utilización del modelo de factura
const UsuarioModel = require("../models/usuario");
const jwt = require('jsonwebtoken');

const config = process.env;

//Método para obtener las facturas
module.exports.get = async (req, res, next) => {
  const usuarios = await UsuarioModel.find().populate("estado").exec();
  res.json(usuarios);
};

//Método para obtener una facturas por ID
module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const usuario = await UsuarioModel.findOne({ _id: id }).populate("estado").exec();
  res.json(usuario);
};

//Método para crear las facturas
module.exports.create = (req, res, next) => {
  const usuarioModel = new UsuarioModel( req.body );
  usuarioModel.save();
  res.json(usuarioModel);
};

//Método para eliminar las facturas
module.exports.delete = async (req, res, next) => {
  const usuario = await UsuarioModel.findByIdAndRemove(req.params.id);
  // si factura es null significa que no existe el registro
  if (usuario) {
    res.json({ result: "El usuario fue borrado correctamente", usuario });
  } else {
    res.json({ result: "ID del usuario no existe en los documentos de la BD", usuario });
  }
};

//Método para modificar las facturas
module.exports.update = async (req, res, next) => {
  const usuario = await UsuarioModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,     // ==> {numFactura: numFactura, nomCliente: nomCliente, dirCliente:dirCliente, telCliente:telCliente}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(usuario);
};

// creación de nuevos usuarios
module.exports.signup = async (req, res, next) => {
  const { correo, contrasenna, rol} = req.body;
  if (!correo || !contrasenna) {
      res.json({ success: false, msg: 'Por favor envié los datos de usuario y contraseña!' });
  } else {
      var newUser = new UserModel({ correo: correo, contrasenna: contrasenna, rol:rol });
      // save the user
      newUser.save(function (err) {
          if (err) {
              return res.json({ success: false, msg: 'El usuario ya existe en la base de datos!' });
          }
          res.json({ success: true, msg: 'Usuario creado con exito!' });
      });
  }
};

// logueo de usuarios
module.exports.signin = async (req, res, next) => {

  const { correo, contrasenna } = req.body;

  const user = await UsuarioModel.findOne({ correo: correo }).exec();

  if (!user) {
      res.status(401).send({ success: false, msg: 'Autenticación incorrecta, por favor valide el usuario y contraseña' });
  } else {
      //Si el usuario existe verifica si las contraseñas
      user.comparePassword(contrasenna, user.contrasenna, function (err, isMatch) {
          if (isMatch && !err) {
            // Si el usuario es correcto y la contraseña coindice se procede a crear el token
            const token = jwt.sign(
              { correo: correo },
              config.SECRETWORDJWT,
              { expiresIn: "2h" }
            );
            // return the information including token as JSON
            const payload = { rol: user.rol, correo: user.correo };
            res.status(202).send({ success: true, token: token, user: payload });
          } else {
              //si la contraseña no coincide se procede a indicar el error
              res.status(401).send({ success: false, msg: 'Clave incorrecta' });
              //res.json({ success: false, msg: 'Authentication failed. Wrong password.' });
          }
      });
  }
};