import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividades.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  ALL_Actividades: Actividad [] = [
    {   idActividad: 1,   nombreActividad: "Cambio de Tejas"   },
    {   idActividad: 2,   nombreActividad: "Mantenimiento de cerca"       },
    {   idActividad: 3,   nombreActividad: "Jardinería"       }
]
  constructor() { }
  getAllActividades() : Observable<Actividad[]>{
    return of (this.ALL_Actividades);
  }
  createNewActividad(nuevaActividad){ 
    this.ALL_Actividades.push(nuevaActividad);
  }
  eliminarActividad(element){
    this.ALL_Actividades.splice(element,1);
  }
  async getActividadById(id){
    const index = await this.ALL_Actividades.findIndex( nombre => nombre.idActividad === id  );
    console.log("Indice:" + index);
    return this.ALL_Actividades[index] ;
  }
}