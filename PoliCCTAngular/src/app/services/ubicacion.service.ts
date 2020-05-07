import { Injectable } from '@angular/core';
import { Ubicacion } from '../models/ubicaciones.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  
  ALL_Ubicaciones: Ubicacion [] = [
    {   idUbicacion: 1,   nombreUbicacion: "Biblioteca" , idSede: 1 },
    {   idUbicacion: 2,   nombreUbicacion: "Gimnasio"   , idSede: 1 },
    {   idUbicacion: 3,   nombreUbicacion: "Cafeteria"  , idSede: 1 }
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
  editarUbicacion(element, nombreSede, nombreUbicacion){
    this.ALL_Ubicaciones[element].nombreUbicacion = nombreUbicacion;
    this.ALL_Ubicaciones[element].idSede = nombreSede;
  }
}