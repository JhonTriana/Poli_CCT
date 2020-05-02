import { Injectable } from '@angular/core';
import { Ubicacion } from '../models/ubicaciones.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  ALL_Ubicaciones: Ubicacion [] = [
    {   idUbicacion: 1,   nombreUbicacion: "Castilla"   },
    {   idUbicacion: 2,   nombreUbicacion: "Calle 63"       },
    {   idUbicacion: 3,   nombreUbicacion: "Chapinero"       }
]
  constructor() { }
  getAllUbicaciones() : Observable<Ubicacion[]>{
    return of (this.ALL_Ubicaciones);
  }
  createNewUbicacion(nuevaUbicacion){ 
    this.ALL_Ubicaciones.push(nuevaUbicacion);
  }
  eliminarUbicacion(element){
    this.ALL_Ubicaciones.splice(element,1);
  }
}