import { Injectable } from '@angular/core';
import { Documento } from '../models/Documentos.model';
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
    this.ALL_Documentos.push(nuevoDocumento);
  }
  eliminarDocumento(element){
    this.ALL_Documentos.splice(element,1);
  }
  editarDocumento(element, result){
    this.ALL_Documentos[element].nombreDocumento = result ;
  }
  getDocumentoPorCriterio(idDocumento){
    return of (this.ALL_Documentos.filter((documento:any) => documento.idDocumento == idDocumento));
  }
}