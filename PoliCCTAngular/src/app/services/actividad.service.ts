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
export class ActividadService {
  constructor(private http: HttpClient) { 
  }
  getAllActividades(): Observable<{}>{
    return this.http.get(environment.urlActividad, httpOptions);
  }
  createNewActividad(nuevaActividad): Observable<{}>{ 
    return this.http.post(environment.urlActividad, nuevaActividad, httpOptions);
  }
  editarActividad(editarActividad): Observable<{}>{
    return this.http.put(environment.urlActividad + editarActividad.idActividad , editarActividad, httpOptions);
  }
  eliminarActividad(idActividad): Observable<{}>{
    return this.http.delete(environment.urlActividad + idActividad, httpOptions);
  }
}
