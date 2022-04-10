//Utilización del modelo de factura
const ChoferModel = require("../models/chofer");

//Método para obtener las facturas
module.exports.get = async (req, res, next) => {
  const choferes = await ChoferModel.find().populate("estado").exec();
  res.json(choferes);
};

//Método para obtener una facturas por ID
module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const chofer = await ChoferModel.findOne({ _id: id }).populate("estado").exec();
  res.json(chofer);
};

//Método para crear las facturas
module.exports.create = (req, res, next) => {
  const choferModel = new ChoferModel( req.body );
  choferModel.save();
  res.json(choferModel);
};

//Método para eliminar las facturas
module.exports.delete = async (req, res, next) => {
  const chofer = await ChoferModel.findByIdAndRemove(req.params.id);
  // si factura es null significa que no existe el registro
  if (chofer) {
    res.json({ result: "El chofer fue borrado correctamente", chofer });
  } else {
    res.json({ result: "ID del chofer no existe en los documentos de la BD", chofer });
  }
};

//Método para modificar las facturas
module.exports.update = async (req, res, next) => {
  const chofer = await ChoferModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,     // ==> {numFactura: numFactura, nomCliente: nomCliente, dirCliente:dirCliente, telCliente:telCliente}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(chofer);
};