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
export class SedeService {

  constructor(private http: HttpClient) { }
  getAllSedes(): Observable<{}>{
    return this.http.get(environment.urlSedes , httpOptions);
  }
  createNewSede(nuevaSede): Observable<{}>{ 
    return this.http.post(environment.urlSedes, nuevaSede, httpOptions);
  }
  editarSede(editarSede): Observable<{}>{
    return this.http.put(environment.urlSedes + editarSede.idSede, editarSede, httpOptions);  
  }
  eliminarSede(idSede): Observable<{}>{
    return this.http.delete(environment.urlSedes + idSede, httpOptions);
  }
  
}