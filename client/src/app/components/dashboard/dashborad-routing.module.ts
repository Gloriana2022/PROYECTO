import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { ReportesComponent } from '../reportes/reportes.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent, children: [
    { path: 'inicio', component: InicioComponent },
    { path: 'reportes', component: ReportesComponent },
  ]
}  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }