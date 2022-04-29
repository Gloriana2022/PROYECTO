import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';



const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    //{ path: 'login', redirectTo: '/login', pathMatch: 'full' },
    
    //{ path: 'contactenos', redirectTo: '/contactenos', pathMatch: 'full' },
    //{ path: 'login', component: InicioComponent},
    { path: 'login', component: LoginComponent},
    { path: 'inicio', component: InicioComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: 'menu', loadChildren: () => import('./components/menu/menu.module').then(x => x.MenuModule) }, //lazy load
    { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) }, //lazy load
  ];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { 


}