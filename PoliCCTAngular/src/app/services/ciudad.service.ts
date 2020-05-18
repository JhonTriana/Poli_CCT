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
export class CiudadService {

  constructor(private http: HttpClient) { 
  }
  getAllCiudades(): Observable<{}>{
    return this.http.get(environment.urlCiudad , httpOptions);
  }
  createNewCiudad(nuevaCiudad): Observable<{}>{ 
    return this.http.post(environment.urlCiudad, nuevaCiudad, httpOptions);
  }  
  editarCiudad(editarCiudad): Observable<{}>{
    return this.http.put(environment.urlCiudad + editarCiudad.idCiudad, editarCiudad, httpOptions);  
  }
  eliminarCiudad(idCiudad): Observable<{}>{
    return this.http.delete(environment.urlCiudad + idCiudad, httpOptions);
  }

}
