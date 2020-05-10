import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividades.model';
import { Observable, of, from } from 'rxjs';
import { HttpClient, } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  
  constructor(private http: HttpClient) {   }
  
  getAllActividades() : Observable<Actividad[]>{
    //return this.All_Actividades; 
    return this.http.get<Actividad[]>(environment.urlActividad);
  }

  createNewActividad(nuevaActividad){ 
    //this.ALL_Actividades.push(nuevaActividad);
  }
  eliminarActividad(element){
    //this.ALL_Actividades.splice(element,1);
  }
  editarActividad(element, result){
    //this.ALL_Actividades[element].nombreActividad = result ;
  }

}
