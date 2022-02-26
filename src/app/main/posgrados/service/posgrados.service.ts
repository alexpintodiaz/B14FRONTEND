import { UsuarioTO } from './../../interfaces/usuariosto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { PosgradoTO } from '../../interfaces/posgradosto.interface';

@Injectable({
  providedIn: 'root'
})


export class PosgradosService {

  url: string = "http://127.0.0.1:4000/api/posgrados";

  constructor(private _http: HttpClient) { }

  listarPosgrados() : Observable<PosgradoTO[]> {
    return this._http.get<PosgradoTO[]>(this.url);
  }

  guardar(posgrado: PosgradoTO) : Observable<PosgradoTO>{
    return this._http.post<PosgradoTO>(this.url, posgrado);
  }

  actualizar(posgrado: PosgradoTO) : Observable<PosgradoTO>{
    return this._http.post<PosgradoTO>(this.url, posgrado);
  }

  eliminar(id: String) : Observable<String>{
    return this._http.delete<String>(this.url + "/" + id);
  }
}
