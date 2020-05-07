import { Injectable } from '@angular/core';
import { Sede } from '../models/sedes.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  ALL_Sedes: Sede [] = [
    {   idSede: 1,   nombreSede: "Campus" , idCiudad: 1 },
    {   idSede: 2,   nombreSede: "Ciudad" , idCiudad: 2 },
    {   idSede: 3,   nombreSede: "City"   , idCiudad: 1 }
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
  editarSede(element, nombreCiudad, nombreSede){
    this.ALL_Sedes[element].nombreSede = nombreSede;
    this.ALL_Sedes[element].idCiudad = nombreCiudad;
  }
}