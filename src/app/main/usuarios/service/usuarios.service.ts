import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { UsuarioTO } from '../../interfaces/usuariosto.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = "http://127.0.0.1:4000/api/usuarios";

  constructor(private _http:HttpClient) { }

  listarUsuarios() : Observable<UsuarioTO[]>{
    return this._http.get<UsuarioTO[]>(this.url);
  }

  guardar(usuario: UsuarioTO) : Observable<UsuarioTO>{
    return this._http.post<UsuarioTO>(this.url, usuario);
  }

  actualizar(usuario: UsuarioTO) : Observable<UsuarioTO>{
    return this._http.post<UsuarioTO>(this.url, usuario);
  }

  eliminar(id: String) : Observable<String>{
    return this._http.delete<String>(this.url + "/" + id);
  }
}
