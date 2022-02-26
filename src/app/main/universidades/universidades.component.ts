import { Component, OnInit } from '@angular/core';
import { UniversidadesService } from './service/universidades.service';
import { UniversidadTO } from '../interfaces/universidadesto.interface';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.component.html',
  styleUrls: ['./universidades.component.css']
})
export class UniversidadesComponent implements OnInit {

  constructor(private _universidadesService: UniversidadesService) { }

  listaUniversidades : UniversidadTO[] = new Array<UniversidadTO>();
  universidad : UniversidadTO = new UniversidadTO();

  ngOnInit(): void {
    this.listarUniversidades();
  }

  listarUniversidades(){
    this._universidadesService.listarUniversidades().subscribe(
      data => {
        this.listaUniversidades = data;
      }
    );
  }

  Guardar(){
    if(this.universidad._id ==""){
    this._universidadesService.guardar(this.universidad).subscribe(
      data => {
        this.listarUniversidades();
        this.LimpiarFormulario();
      }
    );
  } else {
      this._universidadesService.actualizar(this.universidad).subscribe(
        data => {
          this.listarUniversidades();
          this.LimpiarFormulario();
        }
      );}
  }

  Eliminar(id: String){
    this._universidadesService.eliminar(id).subscribe(
      data => {
        this.listarUniversidades();
        this.LimpiarFormulario();
      }
    );
  }

  Ver(pUniversidad: UniversidadTO){
    this.universidad = pUniversidad;
  }

  LimpiarFormulario(){
    this.universidad = new UniversidadTO();
  }

}
