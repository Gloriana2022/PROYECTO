//Utilización del modelo de factura
const UsuarioModel = require("../models/usuario");

//Método para obtener las facturas
module.exports.get = async (req, res, next) => {
  const usuarios = await UsuarioModel.find().exec();
  res.json(usuarios);
};

//Método para obtener una facturas por ID
module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const usuario = await UsuarioModel.findOne({ _id: id }).exec();
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