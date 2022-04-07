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
import { CrearChoferComponent } from './components/chofer/crear-chofer/crear-chofer.component';
import { CrearVehiculoComponent } from './components/vehiculo/crear-vehiculo/crear-vehiculo.component';
import { CrearSolicitudVehiculoComponent } from './components/solicitar-vehiculo/crear-solicitud-vehiculo/crear-solicitud-vehiculo.component';
import { CrearFacturasComponent } from './components/facturas/crear-facturas/crear-facturas.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactenosComponent,
    RegistreseComponent,
    PerfilComponent,
    FacturasComponent,
    CrearUsuarioComponent,
    CrearChoferComponent,
    CrearVehiculoComponent,
    CrearSolicitudVehiculoComponent,
    CrearFacturasComponent,
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
