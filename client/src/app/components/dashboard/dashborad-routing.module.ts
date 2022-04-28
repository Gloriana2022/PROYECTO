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

import { MapsComponent} from '../maps/maps.component';
import { ReportesComponent } from '../reportes/reportes.component';


import { ContactenosComponent } from '../contactenos/contactenos.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';



const routes: Routes = [
  { 
    path: '', component: DashboardComponent, 
    children: [
    { path: 'inicio', component: InicioComponent, canActivate:[AuthGuard] },
    { path: 'usuario', component: UsuarioComponent, canActivate:[AuthGuard] },
    { path: 'crearUsuario', component: CrearUsuarioComponent, canActivate:[AuthGuard] },
    { path: 'crearUsuario/:id', component: CrearUsuarioComponent, canActivate:[AuthGuard] },
    { path: 'solicitarVehiculo', component: SolicitarVehiculoComponent, canActivate:[AuthGuard]},
    { path: 'vehiculo', component: VehiculoComponent, canActivate:[AuthGuard] },
    { path: 'crearVehiculo', component: CrearVehiculoComponent, canActivate:[AuthGuard] },
    { path: 'crearVehiculo/:id', component: CrearVehiculoComponent, canActivate:[AuthGuard] },
    { path: 'chofer', component: ChoferComponent, canActivate:[AuthGuard] },
    { path: 'crearChofer', component: CrearChoferComponent, canActivate:[AuthGuard] },
    { path: 'crearChofer/:id', component: CrearChoferComponent, canActivate:[AuthGuard] },

    { path: 'solicitarVehiculo', component: SolicitarVehiculoComponent, canActivate:[AuthGuard] },
    { path: 'CrearsolicitarVehiculo', component: CrearSolicitudVehiculoComponent, canActivate:[AuthGuard] },
    { path: 'CrearsolicitarVehiculo/:id', component: CrearSolicitudVehiculoComponent, canActivate:[AuthGuard] },
    { path: 'mapa', component: MapsComponent, canActivate:[AuthGuard]},

    { path: 'login', component: LoginComponent },
    { path: 'contactenos', component: ContactenosComponent, canActivate:[AuthGuard] },


    { path: 'reportes', component: ReportesComponent, canActivate:[AuthGuard] },

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



