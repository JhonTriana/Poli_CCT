import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividades.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  ALL_Actividades: Actividad [] = [
    {   idActividad: 1,    nombreActividad: "Cambio de Tejas"   },
    {   idActividad: 2,    nombreActividad: "Mantenimiento de cerca"       },
    {   idActividad: 3,    nombreActividad: "Jardinería"       },
    {   idActividad: 4,    nombreActividad: "Cambio de Piso"       },
    {   idActividad: 5,    nombreActividad: "Cocina"       },
    {   idActividad: 6,    nombreActividad: "Arreglar Ventana"       },
    {   idActividad: 7,    nombreActividad: "Piso"       },
    {   idActividad: 8,    nombreActividad: "Muro"       },
    {   idActividad: 9,    nombreActividad: "Pintura"       },
    {   idActividad: 10,   nombreActividad: "Jardin"       },
    {   idActividad: 11,   nombreActividad: "Sala Start"       },
    {   idActividad: 12,   nombreActividad: "Paradero"       },
    {   idActividad: 13,   nombreActividad: "Parqueadero"       },
    {   idActividad: 14,   nombreActividad: "Cafetería"       },
    {   idActividad: 15,   nombreActividad: "Hornos"       }
]
  constructor(private http: HttpClient) {   }
  
  consultarServicioExterno(){
    return this.http.get('http://swapi.py4e.com/api/films');
  }

  getAllActividades() : Observable<Actividad[]>{
    return of (this.ALL_Actividades);
  }
  createNewActividad(nuevaActividad){ 
    this.ALL_Actividades.push(nuevaActividad);
  }
  eliminarActividad(element){
    this.ALL_Actividades.splice(element,1);
  }
  editarActividad(element, result){
    this.ALL_Actividades[element].nombreActividad = result ;
  }
}