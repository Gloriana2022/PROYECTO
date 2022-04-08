import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { VehiculoService } from 'src/app/service/vehiculo.service';



import swal from 'sweetalert2'; // para instalarlos se debe ejecutar npm install sweetalert2

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

   //Lista de usuarios
  listaVehiculos : Vehiculo[] = [];

    //Configuración de la tabla
    displayedColumns: string[] = ['identificador', 'anno', 'Modelo', 'placa', 'color','puntuacion','estado','ubicacionActual','chofer', 'acciones'];
    dataSource!:  MatTableDataSource<any>;

    //Para la paginación
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor( private vehiculoService: VehiculoService, private _snackbar: MatSnackBar, private router: Router ) { }

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

    swal.fire({
      title: `¿Desea eliminar el vehiculo con el identificador #${element.identificador} con la placa numero ${element.placa}?`,
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
              
               this._snackbar.open('El vehiculo fue eliminado correctamente', '',{
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
      title: `¿Desea eliminar el vehiculo con el identificador # ${element.identificador} con la placa numero ${element.placa}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(element._id);
        this.router.navigateByUrl(`dashboard/crearVehiculo/${element._id}`);
      } 

    });

  }// fin del método modificar


}







