import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { UniversidadTO } from '../../interfaces/universidadesto.interface';

@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {

  url: string = "http://127.0.0.1:4000/api/universidades";

  constructor(private _http: HttpClient) { }

  listarUniversidades() : Observable<UniversidadTO[]>{
    return this._http.get<UniversidadTO[]>(this.url);
  }

  guardar(universidad: UniversidadTO) : Observable<UniversidadTO>{
    return this._http.post<UniversidadTO>(this.url, universidad);
  }

  actualizar(universidad: UniversidadTO) : Observable<UniversidadTO>{
    return this._http.post<UniversidadTO>(this.url, universidad);
  }

  eliminar(id: String) : Observable<String>{
    return this._http.delete<String>(this.url + "/" + id);
  }
}
