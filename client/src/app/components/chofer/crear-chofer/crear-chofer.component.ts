import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Chofer } from 'src/app/models/chofer.model';
import { ChoferService } from 'src/app/service/chofer.service';

@Component({
  selector: 'app-crear-chofer',
  templateUrl: './crear-chofer.component.html',
  styleUrls: ['./crear-chofer.component.css']
})
export class CrearChoferComponent implements OnInit {

  id: number = 0;
  textPantalla: string = 'Crear Chofer';
  isInsertar: boolean = true;
  form:FormGroup;
  chofer = new Chofer;

  //listaEstados : Estado[] = [];

  constructor(private choferService: ChoferService,
    private fb: FormBuilder, private router: Router, 
    private _snackbar: MatSnackBar,
    private activeRouter: ActivatedRoute) { 

    this.form = this.fb.group({
      cedula: ['', Validators.required],
      tipoLicencia: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      fechaVencimientoLicencia: ['', Validators.required],
      choferActual: ['', Validators.required],
    });
  }

  

  ngOnInit(): void {
    //***************************************************************/
    //Se carga la información de los estados
    //***************************************************************/

    //this.cargarEstados();

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
        this.textPantalla = "Modificar Chofer";
        //se consultan los datos de la factura 
        this.choferService.get(this.id)
          .subscribe({
            next: (res: any) => {
              
              this.chofer = res;
              this.form.setValue({cedula: this.chofer.cedula, 
                                  tipoLicencia: this.chofer.tipoLicencia, 
                                  fechaNacimiento: this.chofer.fechaNacimiento, 
                                  fechaVencimientoLicencia: this.chofer.fechaVencimientoLicencia,
                                  choferActual: this.chofer.choferActual});

              console.log(this.chofer);

              this._snackbar.open('El chofer fue cargada con exito, por favor verificar', '',{
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
  /*cargarEstados(): void{
    this.usuarioService.getAll()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.listaEstados = res;
        },
        error: (e:any) => console.error(e)
      });
  }*/
  

  //***************************************************************/
  //Método para modificar una factura
  //***************************************************************/
  modificarChofer(): void{
    const data = {
      cedula: this.form.value.cedula,
      tipoLicencia: this.form.value.tipoLicencia,
      fechaNacimiento: this.form.value.fechaNacimiento,
      fechaVencimientoLicencia: this.form.value.fechaVencimientoLicencia,
      choferActual: this.form.value.choferActual
    };

    console.log(data);

    this.choferService.update(this.id,data)
      .subscribe({
        next: (res: any) => {
          this.form.reset;
          console.log(res);
          this.router.navigateByUrl('/dashboard/chofer');

          this._snackbar.open('El chofer fue modificado con exito, por favor verificar', '',{
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

  saveChofer(): void{
    const data = {
      cedula: this.form.value.cedula,
      tipoLicencia: this.form.value.tipoLicencia,
      fechaNacimiento: this.form.value.fechaNacimiento,
      fechaVencimientoLicencia: this.form.value.fechaVencimientoLicencia,
      choferActual: this.form.value.choferActual
    };

    console.log(data);

    this.choferService.create(data)
      .subscribe({
        next: (res: any) => {
          this.form.reset;
          console.log(res);
          this.router.navigateByUrl('/dashboard/chofer');

          this._snackbar.open('El chofer fue agregado con exito, por favor verificar', '',{
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          
        },
        error: (e:any) => console.error(e)
      });

  }

}
