import { Injectable } from '@angular/core';
import { Solicitud } from '../models/Solicitud.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  ALL_Solicitudes: Solicitud [] = [
    {   idSolicitud: 1,   nombreSolicitud: "Cambio de Tejas"   },
    {   idSolicitud: 2,   nombreSolicitud: "Mantenimiento de cerca"       },
    {   idSolicitud: 3,   nombreSolicitud: "Jardinería"       }
]
  constructor() { }
  getAllSolicitudes() : Observable<Solicitud[]>{
    return of (this.ALL_Solicitudes);
  }
  createNewSolicitud(nuevaSolicitud){ 
    this.ALL_Solicitudes.push(nuevaSolicitud);
  }
  eliminarSolicitud(element){
    this.ALL_Solicitudes.splice(element,1);
  }
  editarSolicitud(element, result){
    this.ALL_Solicitudes[element].nombreSolicitud = result ;
  }
}