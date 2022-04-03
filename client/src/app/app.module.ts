import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { RegistreseComponent } from './components/registrese/registrese.component';
import { SolicitarVehiculoComponent } from './components/solicitar-vehiculo/solicitar-vehiculo.component';
import { GestionarVehiculoComponent } from './components/gestionar-vehiculo/gestionar-vehiculo.component';
import { GestionarChoferComponent } from './components/gestionar-chofer/gestionar-chofer.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ContactenosComponent,
    RegistreseComponent,
    SolicitarVehiculoComponent,
    GestionarVehiculoComponent,
    GestionarChoferComponent,
    ReportesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
