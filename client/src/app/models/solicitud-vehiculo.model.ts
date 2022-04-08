export class SolicitudVehiculo {
    _id?: any;
    identificador?:Number;
    tiempoLlegada?: Number;
    tiempoDuracion?: Number;
    costoServicio?: Number;
    pagoLinea?:String;
    puntoSalida?: String;
    puntoLlegada?:String;
    comentario?: String;
    usuario?: any; //Referencia con estado
    vehiculo?: any; //Referencia con estado
    chofer?: any; //Referencia con estado
}
