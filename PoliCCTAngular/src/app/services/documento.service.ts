import { Injectable } from '@angular/core';
import { Documento } from './../models/documentos.model';
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
export class DocumentoService {
  constructor(private http: HttpClient) { }
  getAllDocumentos(): Observable<{}>{
    return this.http.get(environment.urlDocumento, httpOptions);
  }
  createNewDocumento(nuevoDocumento): Observable<{}>{ 
    return this.http.post(environment.urlDocumento, nuevoDocumento, httpOptions);
  }
  editarDocumento(editarDocumento): Observable<{}>{
    return this.http.put(environment.urlDocumento + editarDocumento.idDocumento , editarDocumento , httpOptions);
  }
  eliminarDocumento(idDocumento): Observable<{}>{
    return this.http.delete(environment.urlDocumento + idDocumento, httpOptions);
  }
}