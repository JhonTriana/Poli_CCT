import { Injectable } from '@angular/core';
import { Documento } from './models/documentos.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  ALL_Documentos: Documento [] = [
    {   idDocumento: 1,   nombreDocumento: "Cédula"          },
    {   idDocumento: 2,   nombreDocumento: "Curso Alturas"   }
]
  constructor() { }
  getAllDocumentos() : Observable<Documento[]>{
    return of (this.ALL_Documentos);
  }
  createNewDocumento(nuevoDocumento){ 
    console.log(nuevoDocumento);
    this.ALL_Documentos.push(nuevoDocumento);
  }
}