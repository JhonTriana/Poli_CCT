import { Injectable } from '@angular/core';
import { Sede } from '../models/sedes.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  ALL_Sedes: Sede [] = [
    {   idSede: 1,   nombreSede: "Medellín"   },
    {   idSede: 2,   nombreSede: "Bucaramanga"       },
    {   idSede: 3,   nombreSede: "Cali"       }
]
  constructor() { }
  getAllSedes() : Observable<Sede[]>{
    return of (this.ALL_Sedes);
  }
  createNewSede(nuevaSede){ 
    this.ALL_Sedes.push(nuevaSede);
  }
  eliminarSede(element){
    this.ALL_Sedes.splice(element,1);
  }
}