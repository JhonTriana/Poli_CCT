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
export class EmployeeService {
  constructor(private http: HttpClient) { }
  getAllEmpleados(): Observable<{}>{
    return this.http.get(environment.urlEmpleado , httpOptions);
  }
  createNewEmpleado(nuevoEmpleado): Observable<{}>{ 
    return this.http.post(environment.urlEmpleado, nuevoEmpleado, httpOptions);
  }
  editarEmpleado(editarEmpleado): Observable<{}>{ 
    return this.http.put(environment.urlEmpleado + editarEmpleado.idEmpleado, editarEmpleado, httpOptions);  
  }
  eliminarEmpleado(idEmpleado): Observable<{}>{
    return this.http.delete(environment.urlEmpleado + idEmpleado, httpOptions);
  }
}