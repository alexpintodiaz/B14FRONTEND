import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './usuarios/service/usuarios.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniversidadesComponent } from './universidades/universidades.component';
import { PosgradosComponent } from './posgrados/posgrados.component';
import { UniversidadesService } from './universidades/service/universidades.service';
import { PosgradosService } from './posgrados/service/posgrados.service';

@NgModule({
  declarations: [
    UsuariosComponent,
    UniversidadesComponent,
    PosgradosComponent
  ],
  providers:[
    UsuariosService,
    UniversidadesService,
    PosgradosService
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModule { }
