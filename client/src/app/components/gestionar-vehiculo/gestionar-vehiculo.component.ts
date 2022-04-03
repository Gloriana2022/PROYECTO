import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-vehiculo',
  templateUrl: './gestionar-vehiculo.component.html',
  styleUrls: ['./gestionar-vehiculo.component.css']
})
export class GestionarVehiculoComponent implements OnInit {

  //Lista de chofer
  listaVehiculos : Vehiculo[] = [];

  //Configuración de la tabla
  displayedColumns: string[] = ['identificador', 'Anno', 'Modelo','Placa','Color', 'Puntuacion', 'Estado','UbicacionActual','acciones'];
  dataSource!:  MatTableDataSource<any>;


  //Para la paginación
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private vehiculoService : VehiculoService, private _snackbar: MatSnackBar, private router: Router ) { }

  ngOnInit(): void {
    this.consultarVehiculo();
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
    this.vehiculoService.getAll()
      .subscribe({
         next: (data) => {
           this.listaVehiculos = data;
           this.dataSource = new MatTableDataSource(this.listaVehiculos);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
           console.log(data);
         },
         error: (e: any) => console.error(e)
      });
    
  }

  eliminarVehiculo(element:any){

    Swal.fire({
      title: `¿Desea eliminar el vehiculo placa #${element.placa} y el chofer con numero de identificacion ${element.identificador}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log(element._id);
        this.vehiculoService.delete(element._id)
          .subscribe({
             next: (data) => {
               this.consultarVehiculo();
               console.log(data);
              
               this._snackbar.open('El vehiculo se elimino correctamente','',{
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

    Swal.fire({
      title: `¿Desea eliminar el vehiculo placa #${element.placa} y el chofer con numero de identificacion ${element.identificador}?`,
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
