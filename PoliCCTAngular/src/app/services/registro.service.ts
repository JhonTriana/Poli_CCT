import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
export class RegistroService{
  constructor(private http: HttpClient) { 
  }
  getAllRegistros(): Observable<{}>{
    return this.http.get(environment.urlRegistro, httpOptions);
  }
  createNewRegistro(nuevoRegistro): Observable<{}>{ 
    return this.http.post(environment.urlRegistro, nuevoRegistro, httpOptions);
  }
  editarRegistro(editarRegistro): Observable<{}>{
    return this.http.put(environment.urlRegistro + editarRegistro.idRegistro , editarRegistro, httpOptions);
  }
  eliminarRegistro(idRegistro): Observable<{}>{
    return this.http.delete(environment.urlRegistro + idRegistro, httpOptions);
  }

}
