import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';



import swal from 'sweetalert2'; // para instalarlos se debe ejecutar npm install sweetalert2

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

   //Lista de usuarios
  listaUsuarios : Usuario[] = [];

    //Configuración de la tabla
    displayedColumns: string[] = ['numUsuario', 'nomUsuario', 'apellidos', 'correo', 'fechaNacimiento','direccion','telefono','tipoUsuario','ubicacion','rol','contrasenna', 'acciones'];
    dataSource!:  MatTableDataSource<any>;

    //Para la paginación
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor( private usuarioService: UsuarioService, private _snackbar: MatSnackBar, private router: Router ) { }

  ngOnInit(): void {
    this.consultarUsuario();
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  consultarUsuario():void{
    this.usuarioService.getAll()
      .subscribe({
         next: (data) => {
           this.listaUsuarios = data;
           this.dataSource = new MatTableDataSource(this.listaUsuarios);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
           console.log(data);
         },
         error: (e: any) => console.error(e)
      });
    
  }


  eliminarUsuario(element:any){

    swal.fire({
      title: `¿Desea eliminar al usuario con cedula #${element.numUsuario} con el nombre de ${element.nomUsuario}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log(element._id);
        this.usuarioService.delete(element._id)
          .subscribe({
             next: (data) => {
               this.consultarUsuario();
               console.log(data);
              
               this._snackbar.open('El usuario fue eliminado correctamente', '',{
                  duration: 5000,
                  horizontalPosition: 'center',
                  verticalPosition: 'bottom'
                });
    
             },
             error: (e: any) => console.error(e)
          });
      } 

    });
    
  } // fin del médoto de eliminar


  modificarUsuario(element:any){

    swal.fire({
      title: `¿Desea eliminar al usuario con cedula # ${element.numUsuario} con el nombre de ${element.nomUsuario}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(element._id);
        this.router.navigateByUrl(`dashboard/crearUsuario/${element._id}`);
      } 

    });

  }// fin del método modificar


}
