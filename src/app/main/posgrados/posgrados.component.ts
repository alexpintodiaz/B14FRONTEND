import { UsuarioTO } from './../interfaces/usuariosto.interface';
import { Component, OnInit } from '@angular/core';
import { PosgradosService } from './service/posgrados.service';
import { PosgradoTO } from '../interfaces/posgradosto.interface';

@Component({
  selector: 'app-posgrados',
  templateUrl: './posgrados.component.html',
  styleUrls: ['./posgrados.component.css']
})
export class PosgradosComponent implements OnInit {

  constructor(private _posgradosService: PosgradosService) { }

  listaPosgrados : PosgradoTO[] = new Array<PosgradoTO>();
  posgrado : PosgradoTO = new PosgradoTO();

  ngOnInit(): void {
    this.listarPosgrados();
  }

  listarPosgrados(){
    this._posgradosService.listarPosgrados().subscribe(
      data => {
        this.listaPosgrados = data;
      }
    );
  }

  Guardar(){
    if(this.posgrado._id == ""){
  this._posgradosService.guardar(this.posgrado).subscribe(
  data => {
    this.listarPosgrados();
    this.LimpiarFormulario();
    }
  );
}else{
  this._posgradosService.actualizar(this.posgrado).subscribe(
    data => {
      this.listarPosgrados();
      this.LimpiarFormulario();
    }
  );
}
  }

  Eliminar(id: String){
  this._posgradosService.eliminar(id).subscribe(
    data => {
      this.listarPosgrados();
      this.LimpiarFormulario();
    }
  );
  }

  Ver(pPosgrado: PosgradoTO){
    this.posgrado = pPosgrado;
  }

  LimpiarFormulario(){
    this.posgrado = new PosgradoTO();
  }

}
