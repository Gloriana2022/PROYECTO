import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InicioComponent } from '../inicio/inicio.component';
import { NavbarComponent } from "../navbar/NavbarComponent";
import { ReportesComponent } from '../reportes/reportes.component';


import { VehiculoComponent } from '../vehiculo/vehiculo.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { ChoferComponent } from '../chofer/chofer.component';
import { SolicitarVehiculoComponent } from '../solicitar-vehiculo/solicitar-vehiculo.component';

import { MapsComponent } from '../maps/maps.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent,
    VehiculoComponent,
    UsuarioComponent,
    ChoferComponent,
    SolicitarVehiculoComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
