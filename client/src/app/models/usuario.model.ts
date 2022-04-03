export class Usuario {
    _id?:any;
    numUsuario?:{
        type: Number,
        unique: true,
        required: true
    };
    nomUsuario?: String;
    apellidos?: String;
    correo?: String;
    fechaNacimiento?: String;
    direccion?: String;
    telefono?: Number;
    tipoUsuario?: String;
    ubicacion?: String;
    rol?: String;
    contrasenna?: String;
}
