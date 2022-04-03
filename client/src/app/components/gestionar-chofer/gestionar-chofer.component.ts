import { Component, OnInit, ViewChild } from '@angular/core';
import { Chofer } from 'src/app/models/chofer.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChoferService } from '../../service/chofer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-chofer',
  templateUrl: './gestionar-chofer.component.html',
  styleUrls: ['./gestionar-chofer.component.css']
})
export class GestionarChoferComponent implements OnInit {

  //Lista de Choferes
  listaChoferes : Chofer[] = [];

  //Configuración de la tabla
  displayedColumns: string[] = ['nombre', 'descripcion', 'acciones'];
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
           this.listaChoferes = data;
           this.dataSource = new MatTableDataSource(this.listaChoferes);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
           console.log(data);
         },
         error: (e: any) => console.error(e)
      });
    
  }

  eliminarChofer(element:any){

    Swal.fire({
      title: `¿Desea eliminar la factura #${element.nombre} la a nombre de ${element.descripcion}?`,
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
              
               this._snackbar.open('La factura eliminada correctamente','',{
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

    Swal.fire({
      title: `¿Desea eliminar el chofer #${element.cedula} con el nombre de ${element.choferActual}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(element._id);
        this.router.navigateByUrl(`dashboard/detalleChofer/${element._id}`);
      } 

    });

  }// fin del método modificar

}
