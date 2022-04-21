import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from '../inicio/inicio.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { CrearUsuarioComponent } from '../usuario/crear-usuario/crear-usuario.component';
import { CrearVehiculoComponent } from '../vehiculo/crear-vehiculo/crear-vehiculo.component';
import { SolicitarVehiculoComponent } from '../solicitar-vehiculo/solicitar-vehiculo.component';
import { VehiculoComponent } from '../vehiculo/vehiculo.component';
import { ChoferComponent } from '../chofer/chofer.component';
import { CrearChoferComponent } from '../chofer/crear-chofer/crear-chofer.component';

import { CrearSolicitudVehiculoComponent } from '../solicitar-vehiculo/crear-solicitud-vehiculo/crear-solicitud-vehiculo.component';


import { ReportesComponent } from '../reportes/reportes.component';


import { ContactenosComponent } from '../contactenos/contactenos.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';



const routes: Routes = [
  { 
    path: '', component: DashboardComponent, children: [
    { path: 'inicio', component: InicioComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'crearUsuario', component: CrearUsuarioComponent },
    { path: 'crearUsuario/:id', component: CrearUsuarioComponent },
    { path: 'solicitarVehiculo', component: SolicitarVehiculoComponent },
    { path: 'vehiculo', component: VehiculoComponent },
    { path: 'crearVehiculo', component: CrearVehiculoComponent },
    { path: 'crearVehiculo/:id', component: CrearVehiculoComponent },
    { path: 'chofer', component: ChoferComponent },
    { path: 'crearChofer', component: CrearChoferComponent },
    { path: 'crearChofer/:id', component: CrearChoferComponent },

    { path: 'solicitarVehiculo', component: SolicitarVehiculoComponent },
    { path: 'CrearsolicitarVehiculo', component: CrearSolicitudVehiculoComponent },
    { path: 'CrearsolicitarVehiculo/:id', component: CrearSolicitudVehiculoComponent },

    { path: 'login', component: LoginComponent },
    { path: 'contactenos', component: ContactenosComponent },


    { path: 'reportes', component: ReportesComponent },

    /*{
      path: 'dashboard', canActivate:[AuthGuard],
      children:[
        { path: 'crearChofer', component: CrearChoferComponent },
        { path: 'crearChofer/:id', component: CrearChoferComponent }
      ]
    }*/

    
  ]
}  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }



