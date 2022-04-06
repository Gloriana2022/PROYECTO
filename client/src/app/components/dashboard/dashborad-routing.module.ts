import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from '../inicio/inicio.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { CrearUsuarioComponent } from '../usuario/crear-usuario/crear-usuario.component';
import { SolicitarVehiculoComponent } from '../solicitar-vehiculo/solicitar-vehiculo.component';
import { VehiculoComponent } from '../vehiculo/vehiculo.component';
import { ChoferComponent } from '../chofer/chofer.component';
import { ReportesComponent } from '../reportes/reportes.component';




const routes: Routes = [
  { 
    path: '', component: DashboardComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'crearUsuario', component: CrearUsuarioComponent },
    { path: 'solicitarVehiculo', component: SolicitarVehiculoComponent },
    { path: 'vehiculo', component: VehiculoComponent },
    { path: 'chofer', component: ChoferComponent },
    { path: 'reportes', component: ReportesComponent }
  ]
}  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }