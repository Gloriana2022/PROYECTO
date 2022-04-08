import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Chofer } from 'src/app/models/chofer.model';
import { ChoferService } from 'src/app/service/chofer.service';
import swal from 'sweetalert2'; // para instalarlos se debe ejecutar npm install sweetalert2

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {

  //Lista de chofer
  listaChofer : Chofer[] = [];

  
  //Configuración de la tabla
  displayedColumns: string[] = ['cedula','choferActual', 'tipoLicencia','fechaNacimiento','fechaVencimientoLicencia','estado','acciones'];
  dataSource!:  MatTableDataSource<any>;

  //Para la paginación
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private choferService : ChoferService, private _snackbar: MatSnackBar, private router: Router ) { }

  ngOnInit(): void {
    this.consultarChofer();
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


  consultarChofer():void{
    this.choferService.getAll()
      .subscribe({
         next: (data) => {
           this.listaChofer = data;
           this.dataSource = new MatTableDataSource(this.listaChofer);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
           console.log(data);
         },
         error: (e: any) => console.error(e)
      });
    
  }

  eliminarChofer(element:any){

    swal.fire({
      title: `¿Desea eliminar al chofer con cedula # ${element.cedula} nombre  ${element.choferActual}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log(element._id);
        this.choferService.delete(element._id)
          .subscribe({
             next: (data) => {
               this.consultarChofer();
               console.log(data);
              
               this._snackbar.open('El chofer fue eliminada correctamente','',{
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


  modificarChofer(element:any){

    swal.fire({
      title: `¿Desea eliminar al chofer con cedula # ${element.cedula} nombre  ${element.choferActual}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(element._id);
        this.router.navigateByUrl(`dashboard/crearChofer/${element._id}`);
      } 

    });

  }// fin del método modificar

}
