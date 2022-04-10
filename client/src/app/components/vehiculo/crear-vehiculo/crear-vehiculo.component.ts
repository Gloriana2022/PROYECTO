import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Chofer } from 'src/app/models/chofer.model';
import { Estado } from 'src/app/models/estado.model';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { ChoferService } from 'src/app/service/chofer.service';
import { EstadoService } from 'src/app/service/estado.service';
import { VehiculoService } from 'src/app/service/vehiculo.service';



@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  id: number = 0;
  textPantalla: string = 'Crear Vehiculo';
  isInsertar: boolean = true;
  form:FormGroup;
  vehiculo = new Vehiculo;

  listaVehiculos : Vehiculo[] = [];
  listaChoferes : Chofer[] = [];
  listaEstados : Estado[] = [];
  

  constructor(private vehiculoService: VehiculoService,private choferService: ChoferService,private estadoService: EstadoService,
    private fb: FormBuilder, private router: Router, 
    private _snackbar: MatSnackBar,
    private activeRouter: ActivatedRoute) { 

    this.form = this.fb.group({
      identificador: ['', Validators.required],
      anno: ['', Validators.required],
      Modelo: ['', Validators.required],
      placa: ['', Validators.required],
      color: ['', Validators.required],
      puntuacion: ['', Validators.required],
      estado: ['', Validators.required],
      ubicacionActual: ['', Validators.required],
      chofer: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //***************************************************************/
    //Se carga la información de los estados
    //***************************************************************/

    this.cargarVehiculo();
    this.cargarChofer();
    this.cargarEstados();

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
        this.textPantalla = "Modificar Vehiculo";
        //se consultan los datos de la factura 
        this.vehiculoService.get(this.id)
          .subscribe({
            next: (res: any) => {
              
              this.vehiculo = res;
              this.form.setValue({identificador: this.vehiculo.identificador, 
                                  anno: this.vehiculo.anno, 
                                  Modelo: this.vehiculo.Modelo,
                                  placa: this.vehiculo.placa,
                                  color: this.vehiculo.color,
                                  puntuacion: this.vehiculo.puntuacion,
                                  estado: this.vehiculo.estado._id,
                                  ubicacionActual: this.vehiculo.ubicacionActual,
                                  chofer: this.vehiculo.chofer._id});

              console.log(this.vehiculo);

              this._snackbar.open('El vehiculo fue cargada con exito, por favor verificar', '',{
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
  cargarVehiculo(): void{
    this.vehiculoService.getAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.listaVehiculos = res;
        },
        error: (e:any) => console.error(e)
      });
  }
  
  cargarChofer(): void{
    this.choferService.getAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.listaChoferes = res;
        },
        error: (e:any) => console.error(e)
      });
  }

  cargarEstados(): void{
    this.estadoService.getAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.listaEstados = res;
        },
        error: (e:any) => console.error(e)
      });
  }

 
  //***************************************************************/
  //Método para modificar una factura
  //***************************************************************/
  modificarVehiculo(): void{
    const data = {
      identificador: this.form.value.identificador,
      anno: this.form.value.anno,
      Modelo: this.form.value.Modelo,
      placa: this.form.value.placa,
      color: this.form.value.color,
      puntuacion: this.form.value.puntuacion,
      estado: this.form.value.estado,
      ubicacionActual: this.form.value.ubicacionActual,
      chofer: this.form.value.chofer
    };

    console.log(data);

    this.vehiculoService.update(this.id,data)
      .subscribe({
        next: (res: any) => {
          this.form.reset;
          console.log(res);
          this.router.navigateByUrl('/dashboard/vehiculo');

          this._snackbar.open('El vehiculo fue modificado con exito, por favor verificar', '',{
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

  saveVehiculo(): void{
    const data = {
      identificador: this.form.value.identificador,
      anno: this.form.value.anno,
      Modelo: this.form.value.Modelo,
      placa: this.form.value.placa,
      color: this.form.value.color,
      puntuacion: this.form.value.puntuacion,
      estado: this.form.value.estado,
      ubicacionActual: this.form.value.ubicacionActual,
      chofer: this.form.value.chofer
    };

    console.log(data);

    this.vehiculoService.create(data)
      .subscribe({
        next: (res: any) => {
          this.form.reset;
          console.log(res);
          this.router.navigateByUrl('/dashboard/vehiculo');

          this._snackbar.open('El vehiculo fue agregado con exito, por favor verificar', '',{
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          
        },
        error: (e:any) => console.error(e)
      });

  }

}
