import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo.model';

@Component({
  selector: 'app-gestionar-vehiculo',
  templateUrl: './gestionar-vehiculo.component.html',
  styleUrls: ['./gestionar-vehiculo.component.css']
})
export class GestionarVehiculoComponent implements OnInit {

  //Lista de chofer
  listaEstados : Vehiculo[] = [];

  //Configuración de la tabla
  displayedColumns: string[] = ['identificador', 'Anno', 'Modelo','Placa','Color', 'Puntuacion', 'Estado','UbicacionActual'];
  dataSource!:  MatTableDataSource<any>;


  //Para la paginación
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private vehiculoService : EstadoService, private _snackbar: MatSnackBar, private router: Router ) { }

  ngOnInit(): void {
    this.consultarEstado();
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


  consultarVehiculo():void{
    this.estadoService.getAll()
      .subscribe({
         next: (data) => {
           this.listaEstados = data;
           this.dataSource = new MatTableDataSource(this.listaEstados);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
           console.log(data);
         },
         error: (e: any) => console.error(e)
      });
    
  }

  eliminarVehiculo(element:any){

    swal.fire({
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
        this.estadoService.delete(element._id)
          .subscribe({
             next: (data) => {
               this.consultarEstado();
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


  modificarVehiculo(element:any){

    swal.fire({
      title: `¿Desea eliminar la factura #${element.nombre} la a nombre de ${element.descripcion}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(element._id);
        this.router.navigateByUrl(`dashboard/detalleEstado/${element._id}`);
      } 

    });

  }// fin del método modificar

}
