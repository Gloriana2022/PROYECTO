import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { RegistreseComponent } from './components/registrese/registrese.component';

import { SharedModule } from './components/shared/shared.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { CrearUsuarioComponent } from './components/usuario/crear-usuario/crear-usuario.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactenosComponent,
    RegistreseComponent,
    PerfilComponent,
    FacturasComponent,
    CrearUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
