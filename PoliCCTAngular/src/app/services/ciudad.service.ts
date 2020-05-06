import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudades.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  ALL_Ciudades: Ciudad [] = [
    {   idCiudad: 1,   nombreCiudad: "Medellín"   },
    {   idCiudad: 2,   nombreCiudad: "Bucaramanga"       },
    {   idCiudad: 3,   nombreCiudad: "Cali"       },
    {   idCiudad: 4,   nombreCiudad: "Bogotá D.C." }
]
  constructor() { }
  getAllCiudades() : Observable<Ciudad[]>{
    return of (this.ALL_Ciudades);
  }
  createNewCiudad(nuevaCiudad){ 
    this.ALL_Ciudades.push(nuevaCiudad);
  }
  eliminarCiudad(element){
    this.ALL_Ciudades.splice(element,1);
    }
    editarCiudad(element, result){
      this.ALL_Ciudades[element].nombreCiudad=result;
    }
}
