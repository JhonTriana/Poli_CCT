import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
//import { RegistroDependencias } from '../models/registrodependencias1.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroDependenciasService{
  constructor(private http: HttpClient) { 
  }
  getAllRegistroDependencias(): Observable<{}>{
    return this.http.get(environment.urlRegistroDependencias, httpOptions);
  }
  createNewRegistroDependencias(nuevoRegistroDependencias): Observable<{}>{ 
    return this.http.post(environment.urlRegistroDependencias, nuevoRegistroDependencias, httpOptions);
  }
  editarRegistroDependencias(editarRegistroDependencias): Observable<{}>{
    return this.http.put(environment.urlRegistroDependencias + editarRegistroDependencias.idDependencias , editarRegistroDependencias, httpOptions);
  }
  eliminarRegistroDependencias(idDependencias): Observable<{}>{
    return this.http.delete(environment.urlRegistroDependencias + idDependencias, httpOptions);
  }
}
