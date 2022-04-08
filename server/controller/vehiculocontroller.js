//Utilización del modelo de factura
const VehiculoModel = require("../models/vehiculo");

//Método para obtener las facturas
module.exports.get = async (req, res, next) => {
  const vehiculos = await VehiculoModel.find().populate("chofer").populate("estado").exec();
  res.json(vehiculos);
};

//Método para obtener una facturas por ID
module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const vehiculo = await VehiculoModel.findOne({ _id: id }).populate("chofer").populate("estado").exec();
  res.json(vehiculo);
};

//Método para crear las facturas
module.exports.create = (req, res, next) => {
  const vehiculoModel = new VehiculoModel( req.body );
  vehiculoModel.save();
  res.json(vehiculoModel);
};

//Método para eliminar las facturas
module.exports.delete = async (req, res, next) => {
  const vehiculo = await VehiculoModel.findByIdAndRemove(req.params.id);
  // si factura es null significa que no existe el registro
  if (vehiculo) {
    res.json({ result: "El vehiculo fue borrado correctamente", vehiculo });
  } else {
    res.json({ result: "ID del vehiculo no existe en los documentos de la BD", vehiculo });
  }
};

//Método para modificar las facturas
module.exports.update = async (req, res, next) => {
  const vehiculo = await VehiculoModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,     // ==> {numFactura: numFactura, nomCliente: nomCliente, dirCliente:dirCliente, telCliente:telCliente}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(vehiculo);
};