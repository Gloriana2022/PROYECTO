import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Estado } from 'src/app/models/estado.model';
import { Usuario } from 'src/app/models/usuario.model';
import { EstadoService } from 'src/app/service/estado.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  id: number = 0;
  textPantalla: string = 'Crear Usuario';
  isInsertar: boolean = true;
  form:FormGroup;
  usuario = new Usuario;

  listaEstados : Estado[] = [];

  constructor(private usuarioService: UsuarioService,private estadoService: EstadoService,
    private fb: FormBuilder, private router: Router, 
    private _snackbar: MatSnackBar,
    private activeRouter: ActivatedRoute) { 

    this.form = this.fb.group({
      numUsuario: ['', Validators.required],
      nomUsuario: ['', Validators.required],
      apellidos: ['', Validators.required],
      username: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      ubicacion: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  

  ngOnInit(): void {
    //***************************************************************/
    //Se carga la información de los estados
    //***************************************************************/

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
        this.textPantalla = "Modificar Usuario";
        //se consultan los datos de la factura 
        this.usuarioService.get(this.id)
          .subscribe({
            next: (res: any) => {
              
              this.usuario = res;
              this.form.setValue({numUsuario: this.usuario.numUsuario, 
                                  nomUsuario: this.usuario.nomUsuario, 
                                  apellidos: this.usuario.apellidos, 
                                  username: this.usuario.username,
                                  fechaNacimiento: this.usuario.fechaNacimiento,
                                  direccion: this.usuario.direccion,
                                  telefono: this.usuario.telefono,
                                  tipoUsuario: this.usuario.tipoUsuario,
                                  ubicacion: this.usuario.ubicacion,
                                  role: this.usuario.role,
                                  password: this.usuario.password,
                                  estado: this.usuario.estado._id});

              console.log(this.usuario);

              this._snackbar.open('El usuario fue cargada con exito, por favor verificar', '',{
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
  modificarUsuario(): void{
    const data = {
      numUsuario: this.form.value.numUsuario,
      nomUsuario: this.form.value.nomUsuario,
      apellidos: this.form.value.apellidos,
      username: this.form.value.username,
      fechaNacimiento: this.form.value.fechaNacimiento,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,
      tipoUsuario: this.form.value.tipoUsuario,
      ubicacion: this.form.value.ubicacion,
      role: this.form.value.role,
      password: this.form.value.password,
      estado: this.form.value.estado
    };

    console.log(data);

    this.usuarioService.update(this.id,data)
      .subscribe({
        next: (res: any) => {
          this.form.reset;
          console.log(res);
          this.router.navigateByUrl('/dashboard/crearUsuario');

          this._snackbar.open('El usuario fue modificado con exito, por favor verificar', '',{
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

  saveUsuario(): void{
    const data = {
      numUsuario: this.form.value.numUsuario,
      nomUsuario: this.form.value.nomUsuario,
      apellidos: this.form.value.apellidos,
      username: this.form.value.username,
      fechaNacimiento: this.form.value.fechaNacimiento,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,
      tipoUsuario: this.form.value.tipoUsuario,
      ubicacion: this.form.value.ubicacion,
      role: this.form.value.role,
      password: this.form.value.password,
      estado: this.form.value.estado
    };

    console.log(data);

    this.usuarioService.create(data)
      .subscribe({
        next: (res: any) => {
          this.form.reset;
          console.log(res);
          this.router.navigateByUrl('/dashboard/usuario');

          this._snackbar.open('El usuario fue agregado con exito, por favor verificar', '',{
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          
        },
        error: (e:any) => console.error(e)
      });

  }

}
