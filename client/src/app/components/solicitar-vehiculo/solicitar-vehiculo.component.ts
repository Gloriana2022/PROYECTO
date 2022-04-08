import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SolicitudVehiculo } from 'src/app/models/solicitud-vehiculo.model';
import { SolicitudVehiculoService } from 'src/app/service/solicitud-vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitar-vehiculo',
  templateUrl: './solicitar-vehiculo.component.html',
  styleUrls: ['./solicitar-vehiculo.component.css']
})
export class SolicitarVehiculoComponent implements OnInit {

//Lista de Choferes
listaSolicitudVehiculos : SolicitudVehiculo[] = [];

//Configuración de la tabla
displayedColumns: string[] = ['identificador','usuario', 'chofer','vehiculo', 'tiempoLlegada','tiempoDuracion','costoServicio','pagoLinea','puntoSalida','puntoLlegada','comentario', 'acciones'];
dataSource!:  MatTableDataSource<any>;


//Para la paginación
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

constructor( private solicitarVehiculoService : SolicitudVehiculoService, private _snackbar: MatSnackBar, private router: Router ) { }

ngOnInit(): void {
  this.consultarSolicitudVehiculo();
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


consultarSolicitudVehiculo():void{
  this.solicitarVehiculoService.getAll()
    .subscribe({
       next: (data) => {
         this.listaSolicitudVehiculos = data;
         this.dataSource = new MatTableDataSource(this.listaSolicitudVehiculos);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
         console.log(data);
       },
       error: (e: any) => console.error(e)
    });
  
}

eliminarSolicitudVehiculo(element:any){

  Swal.fire({
    title: `¿Desea eliminar la solicitud #${element._id}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {

      console.log(element._id);
      this.solicitarVehiculoService.delete(element._id)
        .subscribe({
           next: (data) => {
             this.consultarSolicitudVehiculo();
             console.log(data);
            
             this._snackbar.open('La solicitud se ha eliminado correctamente','',{
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


modificarSolicitudVehiculo(element:any){

  Swal.fire({
    title: `¿Desea modificar la solicitud #${element._id}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, modificar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(element._id);
      this.router.navigateByUrl(`dashboard/CrearsolicitarVehiculo/${element._id}`);
    } 

  });

}// fin del método modificar

}
