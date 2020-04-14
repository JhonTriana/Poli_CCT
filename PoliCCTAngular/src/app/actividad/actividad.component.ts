import { Component, OnInit } from '@angular/core';
import { Actividad } from '../models/actividades.model';
import { ActividadService } from '../actividad.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})

export class ActividadComponent implements OnInit {

  newActividad: Actividad;
  misActividades;
  
  constructor(private ActividadService: ActividadService) { 
    this.newActividad = new Actividad;
  }
  nuevaActividad(){
    this.ActividadService.createNewActividad(this.newActividad);
    this.newActividad = new Actividad;
    this.getAllActividades();
  }
  ngOnInit() {
  }  
  getAllActividades(){
    this.ActividadService.getAllActividades().subscribe(
      misActividadesObs => {
        this.misActividades = misActividadesObs;
      }
    )
  }
}
