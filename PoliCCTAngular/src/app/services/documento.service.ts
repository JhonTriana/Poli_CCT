import { Injectable } from '@angular/core';
import { Documento } from '../models/Documentos.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  ALL_Documentos: Documento [] = [
    {   idDocumento: 1,   nombreDocumento: "Cédula"        ,   vigenciaDocumento: 30  },
    {   idDocumento: 2,   nombreDocumento: "Curso Alturas" ,   vigenciaDocumento: 360 }
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
  editarDocumento(element, nombreDocumento, vigenciaDocumento){
    this.ALL_Documentos[element].nombreDocumento = nombreDocumento ;
    this.ALL_Documentos[element].vigenciaDocumento = vigenciaDocumento ;
  }
  getDocumentoPorCriterio(idDocumento){
    return of (this.ALL_Documentos.filter((documento:any) => documento.idDocumento == idDocumento));
  }
}