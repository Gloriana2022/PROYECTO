import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Chofer } from 'src/app/models/chofer.model';
import { SolicitudVehiculo } from 'src/app/models/solicitud-vehiculo.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { ChoferService } from 'src/app/service/chofer.service';
import { SolicitudVehiculoService } from 'src/app/service/solicitud-vehiculo.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-crear-solicitud-vehiculo',
  templateUrl: './crear-solicitud-vehiculo.component.html',
  styleUrls: ['./crear-solicitud-vehiculo.component.css']
})
export class CrearSolicitudVehiculoComponent implements OnInit {

  id: number = 0;
  textPantalla: string = 'Crear Solicitud';
  isInsertar: boolean = true;
  form:FormGroup;
  solicitudVehiculo = new SolicitudVehiculo;

  listaSolicitud : SolicitudVehiculo[] = [];
  listaUsuario : Usuario[] = [];
  listaVehiculo : Vehiculo[] = [];
  listaChofer : Chofer[] = [];

  constructor(private solicitarVehiculoService: SolicitudVehiculoService, private usuarioService: UsuarioService,
    private vehiculoService: VehiculoService, private choferService: ChoferService,
    private fb: FormBuilder, private router: Router, 
    private _snackbar: MatSnackBar,
    private activeRouter: ActivatedRoute) { 

    this.form = this.fb.group({
      identificador: ['', Validators.required],
      tiempoLlegada: ['', Validators.required],
      tiempoDuracion: ['', Validators.required],
      costoServicio: ['', Validators.required],
      pagoLinea: ['', Validators.required],
      puntoSalida: ['', Validators.required],
      puntoLlegada: ['', Validators.required],
      comentario: ['', Validators.required],
      usuario: ['', Validators.required],
      vehiculo: ['', Validators.required],
      chofer: ['', Validators.required],
    });
  }

  

  ngOnInit(): void {
    //***************************************************************/
    //Se carga la información de los estados
    //***************************************************************/
    this.cargarUsuario();
    this.cargarSolicitud();
    this.cargarChofer();
   

    //***************************************************************/
    //Cuando se inicializa el compomente de consulta si el ID
    //fue enviado por parametro
    //***************************************************************/

    this.activeRouter.params.subscribe((params: Params) => {      
      console.log(params);
      this.id = params['id'];

      //***********************************************/
      //se consultan los datos de la factura 
      //***********************************************/

      if(this.id !== undefined){
        this.isInsertar = false;
        this.textPantalla = "Modificar Solicitud de vehiculo";
        //se consultan los datos de la factura 
        this.solicitarVehiculoService.get(this.id)
          .subscribe({
            next: (res: any) => {
              
              this.solicitudVehiculo = res;
              this.form.setValue({identificador: this.solicitudVehiculo.identificador, 
                                  tiempoLlegada: this.solicitudVehiculo.tiempoLlegada, 
                                  tiempoDuracion: this.solicitudVehiculo.tiempoDuracion, 
                                  costoServicio: this.solicitudVehiculo.costoServicio,
                                  pagoLinea: this.solicitudVehiculo.pagoLinea,
                                  puntoSalida: this.solicitudVehiculo.puntoSalida,
                                  puntoLlegada: this.solicitudVehiculo.puntoLlegada,
                                  comentario: this.solicitudVehiculo.comentario,
                                  usuario: this.solicitudVehiculo.usuario._id,
                                  vehiculo: this.solicitudVehiculo.vehiculo._id,
                                  chofer: this.solicitudVehiculo.chofer._id});

              console.log(this.solicitudVehiculo);

              this._snackbar.open('La solicitud del vehiculo fue cargada con exito, por favor verificar', '',{
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom'
              });
              
            },
            error: (e:any) => console.error(e)
        });
  
        console.log('id' + this.id);

      }

    });
  }

  //***************************************************************/
  //Se carga la información de los estados para el select
  //***************************************************************/
  cargarSolicitud(): void{
    this.solicitarVehiculoService.getAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.listaSolicitud = res;
        },
        error: (e:any) => console.error(e)
      });
  }


  cargarUsuario(): void{
    this.usuarioService.getAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.listaUsuario = res;
        },
        error: (e:any) => console.error(e)
      });
  }

  cargarChofer(): void{
    this.choferService.getAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.listaChofer = res;
        },
        error: (e:any) => console.error(e)
      });
  }


  cargarVehiculo(): void{
    this.vehiculoService.getAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.listaVehiculo = res;
        },
        error: (e:any) => console.error(e)
      });
  }
  

  //***************************************************************/
  //Método para modificar una factura
  //***************************************************************/
  modificarSolicitud(): void{
    const data = {
      identificador: this.form.value.identificador,
      tiempoLlegada: this.form.value.tiempoLlegada,
      tiempoDuracion: this.form.value.tiempoDuracion,
      costoServicio: this.form.value.costoServicio,
      pagoLinea: this.form.value.pagoLinea,
      puntoSalida: this.form.value.puntoSalida,
      puntoLlegada: this.form.value.puntoLlegada,
      comentario: this.form.value.comentario,
      usuario: this.form.value.usuario,
      vehiculo: this.form.value.vehiculo,
      chofer: this.form.value.chofer
    };

    console.log(data);

    this.solicitarVehiculoService.update(this.id,data)
      .subscribe({
        next: (res: any) => {
          this.form.reset;
          console.log(res);
          this.router.navigateByUrl('/dashboard/CrearsolicitarVehiculo');

          this._snackbar.open('La solicitud fue modificada con exito, por favor verificar', '',{
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          
        },
        error: (e:any) => console.error(e)
      });

  }

  //***************************************************************/
  //Método para guardar una nueva factura
  //***************************************************************/

  saveSolicitud(): void{
    const data = {
      identificador: this.form.value.identificador,
      tiempoLlegada: this.form.value.tiempoLlegada,
      tiempoDuracion: this.form.value.tiempoDuracion,
      costoServicio: this.form.value.costoServicio,
      pagoLinea: this.form.value.pagoLinea,
      puntoSalida: this.form.value.puntoSalida,
      puntoLlegada: this.form.value.puntoLlegada,
      comentario: this.form.value.comentario,
      usuario: this.form.value.usuario,
      vehiculo: this.form.value.vehiculo,
      chofer: this.form.value.chofer
    };

    console.log(data);

    this.solicitarVehiculoService.create(data)
      .subscribe({
        next: (res: any) => {
          this.form.reset;
          console.log(res);
          this.router.navigateByUrl('/dashboard/solicitarVehiculo');

          this._snackbar.open('La solicitud fue agregado con exito, por favor verificar', '',{
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          
        },
        error: (e:any) => console.error(e)
      });

  }
}
