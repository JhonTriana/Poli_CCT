import { Injectable } from '@angular/core';
import { Documento } from './models/Documentos.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  ALL_Documentos: Documento [] = [
    {   idDocumento: 1,   nombreDocumento: "Cédula"          },
    {   idDocumento: 2,   nombreDocumento: "Curso Alturas"   }
  //{   id: 3,   texto: "Nueva cosa",      autor: "Tatiana",  fecha: "2020/04/06"   },
  //{   id: 4,   texto: "Diferente cosa",  autor: "Cañon",    fecha: "2020/04/06"   }
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