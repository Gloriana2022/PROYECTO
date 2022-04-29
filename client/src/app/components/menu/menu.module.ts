import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

import { MenuRoutingModule } from './menu-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InicioComponent } from '../inicio/inicio.component';
import { ContactenosComponent } from '../contactenos/contactenos.component';
import { LoginComponent } from '../login/login.component';



@NgModule({
  declarations: [
    MenuComponent,
    InicioComponent,
    ContactenosComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule { }
