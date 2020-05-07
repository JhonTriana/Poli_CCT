import { Injectable } from '@angular/core';
import { verVideo } from 'app/models/verVideo.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  ALL_Documentos: verVideo [] = [
    {idVerVideo: 1, idEmpleado: 1, fechaVideo: "02/05/2020", vigencia: "string", validacion: "string"},
    {idVerVideo: 1, idEmpleado: 2, fechaVideo: "03/05/2020", vigencia: "string", validacion: "string"},
    {idVerVideo: 1, idEmpleado: 3, fechaVideo: "04/05/2020", vigencia: "string", validacion: "string"},
    {idVerVideo: 1, idEmpleado: 4, fechaVideo: "05/05/2020", vigencia: "string", validacion: "string"},
    {idVerVideo: 1, idEmpleado: 5, fechaVideo: "06/05/2020", vigencia: "string", validacion: "string"},
    {idVerVideo: 1, idEmpleado: 6, fechaVideo: "07/05/2020", vigencia: "string", validacion: "string"},
    {idVerVideo: 1, idEmpleado: 7, fechaVideo: "08/05/2020", vigencia: "string", validacion: "string"},
    {idVerVideo: 1, idEmpleado: 8, fechaVideo: "09/05/2020", vigencia: "string", validacion: "string"},
    {idVerVideo: 1, idEmpleado: 9, fechaVideo: "10/05/2020", vigencia: "string", validacion: "string"}

]


  constructor() { }
}



 