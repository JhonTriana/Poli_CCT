import { Injectable } from '@angular/core';
import { Actividad } from './models/actividades.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  ALL_Actividades: Actividad [] = [
    {   idActividad: 1,   nombreActividad: "Cualquie cosa"   },
    {   idActividad: 2,   nombreActividad: "Otra cosa"       }
  //{   id: 3,   texto: "Nueva cosa",      autor: "Tatiana",  fecha: "2020/04/06"   },
  //{   id: 4,   texto: "Diferente cosa",  autor: "Cañon",    fecha: "2020/04/06"   }
]
  constructor() { }
  getAllActividades() : Observable<Actividad[]>{
    return of (this.ALL_Actividades);
  }
  createNewActividad(nuevaActividad){ 
    console.log(nuevaActividad);
    this.ALL_Actividades.push(nuevaActividad);
  }
}