import { Injectable } from '@angular/core';
import { Criterio } from '../models/criterios.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriterioService {
  ALL_Criterios: Criterio [] = [
    {   idCriterio: 1,   idActividad: 1,   idDocumento: 1   },
    {   idCriterio: 2,   idActividad: 1,   idDocumento: 2   },
    {   idCriterio: 3,   idActividad: 2,   idDocumento: 1   },
    {   idCriterio: 4,   idActividad: 2,   idDocumento: 2   },
    {   idCriterio: 5,   idActividad: 3,   idDocumento: 1   }
]
  constructor() { }
  getAllCriterios() : Observable<Criterio[]>{
    return of (this.ALL_Criterios);
  }
  crearNuevoCriterio(nuevoCriterio){ 
    this.ALL_Criterios.push(nuevoCriterio);
  }
  eliminarCriterio(element){
    this.ALL_Criterios.splice(element,1);
  }
}


