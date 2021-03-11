import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoClientesComponent } from './ventas/listado-clientes/listado-clientes.component';
import { CrearClienteComponent } from './ventas/crear-cliente/crear-cliente.component';
import { NavComponent } from './nav/nav.component';
import { Page404Component } from './page404/page404.component';
import { VisualizarClienteComponent } from './ventas/visualizar-cliente/visualizar-cliente.component';
import { LoadFadeDirective } from './load-fade.directive';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoClientesComponent,
    CrearClienteComponent,
    NavComponent,
    Page404Component,
    VisualizarClienteComponent,
    LoadFadeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
