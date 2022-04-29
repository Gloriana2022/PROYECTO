import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { InicioComponent } from '../inicio/inicio.component';


import { ContactenosComponent } from '../contactenos/contactenos.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';



const routes: Routes = [
  { 
    path: '', component: MenuComponent, 
    children: [
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contactenos', component: ContactenosComponent },

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
export class MenuRoutingModule { }