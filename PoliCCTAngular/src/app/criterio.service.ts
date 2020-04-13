import { Injectable } from '@angular/core';
import { Criterio } from './models/criterios.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriterioService {
  ALL_Criterios: Criterio [] = [
    {   idCriterio: 1,   idActividad: 1,   idDocumento: 2   },
    {   idCriterio: 2,   idActividad: 1,   idDocumento: 1   }
  //{   id: 3,   texto: "Nueva cosa",      autor: "Tatiana",  fecha: "2020/04/06"   },
  //{   id: 4,   texto: "Diferente cosa",  autor: "Cañon",    fecha: "2020/04/06"   }
]
  constructor() { }
  getAllCriterios() : Observable<Criterio[]>{
    return of (this.ALL_Criterios);
  }
  createNewCriterio(nuevoCriterio){ 
    console.log(nuevoCriterio);
    this.ALL_Criterios.push(nuevoCriterio);
  }
}