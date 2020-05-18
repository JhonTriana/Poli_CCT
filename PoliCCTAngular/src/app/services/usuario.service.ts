import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }  
  getAllUsuarios(): Observable<{}>{
    return this.http.get(environment.urlUsers , httpOptions);
  }
  createNewUsuario(nuevoUsuario): Observable<{}>{ 
    return this.http.post(environment.urlUsers, nuevoUsuario, httpOptions);
  } 
  editarUsuario(editarUsuario): Observable<{}>{
    return this.http.put(environment.urlUsers + editarUsuario.idUser, editarUsuario, httpOptions);  
  }
  eliminarUsuario(idUser){
    return this.http.delete(environment.urlUsers + idUser, httpOptions);
  }

}
