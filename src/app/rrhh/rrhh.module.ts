import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NominasComponent } from './nominas/nominas.component';
import { RrhhRoutingModule } from './rrhh-routing.module';

@NgModule({
  declarations: [
    EmpleadosComponent,
    NominasComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule
  ]
})
export class RrhhModule { }
