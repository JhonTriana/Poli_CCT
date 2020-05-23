import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
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
export class CriterioService {

  constructor(private http: HttpClient) {} 
  getAllCriterios(): Observable<{}>{
    return this.http.get(environment.urlCriterio, httpOptions);
  }
  crearNuevoCriterio(nuevoCriterio): Observable<{}>{ 
    return this.http.post(environment.urlCriterio, nuevoCriterio, httpOptions);
  }
  editarCriterio(editarCriterio): Observable<{}>{
    return this.http.put(environment.urlCriterio + editarCriterio.idCriterio , editarCriterio, httpOptions);
  }
  eliminarCriterio(idCriterio): Observable<{}>{
    return this.http.delete(environment.urlCriterio + idCriterio, httpOptions);
  }
  getCriterioPorActividad(idActividad): Observable<{}>{
    return this.http.get(environment.urlCriterio+"criterioPorActividad/"+idActividad, httpOptions);
  }
}