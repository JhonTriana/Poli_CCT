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
export class UbicacionService {
  
  constructor(private http: HttpClient) { }
  getAllUbicaciones(): Observable<{}>{
    return this.http.get(environment.urlUbicacion , httpOptions);  
  }
  createNewUbicacion(nuevaUbicacion): Observable<{}>{ 
    return this.http.post(environment.urlUbicacion, nuevaUbicacion, httpOptions);  }
  editarUbicacion(editarUbicacion): Observable<{}>{
    return this.http.put(environment.urlUbicacion + editarUbicacion.idUbicacion, editarUbicacion, httpOptions);  
  }
  eliminarUbicacion(idUbicacion): Observable<{}>{
    return this.http.delete(environment.urlUbicacion + idUbicacion, httpOptions);
  }

}