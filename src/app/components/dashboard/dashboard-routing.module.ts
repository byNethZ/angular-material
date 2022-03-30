import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportsComponent } from './reports/reports.component';
import { CrearUsuarioComponent } from './users/crear-usuario/crear-usuario.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsersComponent},
    {path: 'reportes', component: ReportsComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
