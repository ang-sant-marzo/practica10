import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrhhGuard } from './guards/rrhh.guard';
import { InicioComponent } from './inicio/inicio.component';
import { Page404Component } from './page404/page404.component';
import { CrearClienteComponent } from './ventas/crear-cliente/crear-cliente.component';
import { ListadoClientesComponent } from './ventas/listado-clientes/listado-clientes.component';
import { VisualizarClienteComponent } from './ventas/visualizar-cliente/visualizar-cliente.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ventas', children: [
    {path: 'listado-clientes', component: ListadoClientesComponent, data: {titulo: 'Listado de Clientes'}},
    {path: 'crear-cliente', component: CrearClienteComponent},
    {path: 'visualizar-cliente/:id', component: VisualizarClienteComponent}
  ]},
  {
    path: 'recursos-humanos',
    loadChildren: () => import('./rrhh/rrhh.module').then(m => m.RrhhModule),
    canActivate: [RrhhGuard]
  },
  // {path: '**', redirectTo: ''}
  {path: '**', component: Page404Component} // Debe ser el último
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
