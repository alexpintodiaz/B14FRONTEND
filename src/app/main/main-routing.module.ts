import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UniversidadesComponent } from './universidades/universidades.component';
import { PosgradosComponent } from './posgrados/posgrados.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'posgrados', component: PosgradosComponent},
  {path: 'universidades', component: UniversidadesComponent},
  {path: '**', redirectTo:'usuarios'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
