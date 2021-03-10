import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpleadosComponent } from "./empleados/empleados.component";
import { NominasComponent } from "./nominas/nominas.component";

const routes: Routes = [
    {path: '', component: EmpleadosComponent},
    {path: 'nominas', component: NominasComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RrhhRoutingModule {}