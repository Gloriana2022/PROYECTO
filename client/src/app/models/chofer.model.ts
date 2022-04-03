export class Chofer {
    _id?:any;
    cedula?:{
        type: Number,
        unique: true,
        required: true
    };
    tipoLicencia?: String;
    fechaNacimiento?: String;
    fechaVencimientoLicencia?: String;
    choferActual?: String;
}
