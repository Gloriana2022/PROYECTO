import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InicioComponent } from '../inicio/inicio.component';
import { NavbarComponent } from "../navbar/NavbarComponent";
import { ReportesComponent } from '../reportes/reportes.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
