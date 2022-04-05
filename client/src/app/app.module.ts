import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { RegistreseComponent } from './components/registrese/registrese.component';
import { SolicitarVehiculoComponent } from './components/solicitar-vehiculo/solicitar-vehiculo.component';
import { GestionarVehiculoComponent } from './components/gestionar-vehiculo/gestionar-vehiculo.component';
import { GestionarChoferComponent } from './components/gestionar-chofer/gestionar-chofer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactenosComponent,
    RegistreseComponent,
    SolicitarVehiculoComponent,
    GestionarVehiculoComponent,
    GestionarChoferComponent
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
