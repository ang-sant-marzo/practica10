import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Page404Component } from './page404/page404.component';
import { ListadoClientesComponent } from './ventas/listado-clientes/listado-clientes.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'listado-clientes', component: ListadoClientesComponent},
  {
    path: 'recursos-humanos',
    loadChildren: () => import('./rrhh/rrhh.module').then(m => m.RrhhModule)
  },
  // {path: '**', redirectTo: ''}
  {path: '**', component: Page404Component} // Debe ser el último
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
