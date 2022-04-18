const UserModel = require("../models/user");
const jwt = require('jsonwebtoken');

//Se obtiene las variables de entorno
const config = process.env;

//Método para obtener los usuarios
module.exports.get = async (req, res, next) => {
    const users = await UserModel.find().populate("estado").exec();
    res.json(users);
  };
  
  //Método para obtener una facturas por ID
  module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const users = await UserModel.findOne({ _id: id }).populate("estado").exec();
    res.json(users);
  };
  
  //Método para crear los usuarios
  module.exports.create = (req, res, next) => {
    const userModel = new UserModel( req.body );
    userModel.save();
    res.json(userModel);
  };
  
  //Método para eliminar los usuarios
  module.exports.delete = async (req, res, next) => {
    const user = await UserModel.findByIdAndRemove(req.params.id);
    // si factura es null significa que no existe el registro
    if (user) {
      res.json({ result: "El usuario fue borrado correctamente", user });
    } else {
      res.json({ result: "ID del usuario no existe en los documentos de la BD", user });
    }
  };
  
  //Método para modificar las facturas
  module.exports.update = async (req, res, next) => {
    const user = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,     // ==> {numFactura: numFactura, nomCliente: nomCliente, dirCliente:dirCliente, telCliente:telCliente}
      { new: true } // retornar el registro que hemos modificado con los nuevos valores
    );
    res.json(user);
  };

// creación de nuevos usuarios
module.exports.signup = async (req, res, next) => {
    const {numUsuario,nombre, apellidos,username, password, role,fechaNacimiento,direccion,telefono,tipoUsuario,ubicacion,estado} = req.body;
    if (!username || !password) {
        res.json({ success: false, msg: 'Por favor envié los datos de usuario y contraseña!' });
    } else {
        var newUser = new UserModel({ numUsuario:numUsuario,nombre:nombre,apellidos:apellidos, username: username, password: password, role:role,fechaNacimiento:fechaNacimiento,direccion:direccion,telefono:telefono,tipoUsuario:tipoUsuario,ubicacion: ubicacion,estado:estado });
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

    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username }).exec();

    if (!user) {
        res.status(401).send({ success: false, msg: 'Autenticación incorrecta, por favor valide el usuario y contraseña' });
    } else {
        //Si el usuario existe verifica si las contraseñas
        user.comparePassword(password, user.password, function (err, isMatch) {
            if (isMatch && !err) {
              // Si el usuario es correcto y la contraseña coindice se procede a crear el token
              const token = jwt.sign(
                { username: username },
                config.SECRETWORDJWT,
                { expiresIn: "2h" }
              );
              // return the information including token as JSON
              const payload = { role: user.role, username: user.username };
              res.status(202).send({ success: true, token: token, user: payload });
            } else {
                //si la contraseña no coincide se procede a indicar el error
                res.status(401).send({ success: false, msg: 'Clave incorrecta' });
                //res.json({ success: false, msg: 'Authentication failed. Wrong password.' });
            }
        });
    }
};
