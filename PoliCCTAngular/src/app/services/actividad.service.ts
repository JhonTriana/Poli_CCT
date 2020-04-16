import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividades.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  ALL_Actividades: Actividad [] = [
    {   idActividad: 1,   nombreActividad: "Cualquie cosa dato largo para ver el comportamiento"   },
    {   idActividad: 2,   nombreActividad: "Otra cosa"       },
    {   idActividad: 3,   nombreActividad: "Nueva cosa"       }
  //{   id: 3,   texto: "Nueva cosa",      autor: "Tatiana",  fecha: "2020/04/06"   },
  //{   id: 4,   texto: "Diferente cosa",  autor: "Cañon",    fecha: "2020/04/06"   }
]
  constructor() { }
  getAllActividades() : Observable<Actividad[]>{
    return of (this.ALL_Actividades);
  }
  createNewActividad(nuevaActividad){ 
    this.ALL_Actividades.push(nuevaActividad);
  }
  async getActividadById(id){
    const index = await this.ALL_Actividades.findIndex( nombre => nombre.idActividad === id  );
    console.log("Indice:" + index);
    return this.ALL_Actividades[index] ;
  }
}