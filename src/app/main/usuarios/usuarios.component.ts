import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './service/usuarios.service';
import { UsuarioTO } from '../interfaces/usuariosto.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private _usuariosService: UsuariosService) { }

  listaUsuarios : UsuarioTO[] = new Array<UsuarioTO>();
  usuario : UsuarioTO = new UsuarioTO();

  ngOnInit(): void {
    this.listarUsuarios();
  }

listarUsuarios(){
  this._usuariosService.listarUsuarios().subscribe(
  data => {
    this.listaUsuarios = data;
  }
  );
}

Guardar(){
  if(this.usuario._id ==""){
  this._usuariosService.guardar(this.usuario).subscribe(
    data => {
      this.listarUsuarios();
      this.LimpiarFormulario();
    }
  );
}else{
  this._usuariosService.actualizar(this.usuario).subscribe(
    data => {
      this.listarUsuarios();
      this.LimpiarFormulario();
    }
  );
}

}

Eliminar(id: String){
  this._usuariosService.eliminar(id).subscribe(
    data => {
      this.listarUsuarios();
      this.LimpiarFormulario();
    }
  );
}

Ver(pUsuario: UsuarioTO){
  this.usuario = pUsuario;
}

LimpiarFormulario(){
  this.usuario = new UsuarioTO();
}

}
