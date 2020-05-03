import { Injectable } from '@angular/core';
import { RegistroDependencias } from '../models/registrodependencias1.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroDependenciasService {

  ALL_RegistroDependencias1: RegistroDependencias [] = [
    
      { idRegistroDependencias: 1, ntCcRegistroDependencias: 500500, nombreRegistroDependencias: "Marck", cargoRegistroDependencias: "Administrador", areaRegistroDependencias: "Admiciones", celularRegistroDependencias:3700700, telefonoRegistroDependencias:600698, extensionRegistroDependencias:123, correoElectronicoRegistroDependencias: "a@b.com" },
]
  constructor() { }
  getAllRegistroDependencias1() : Observable<RegistroDependencias[]>{
    return of (this.ALL_RegistroDependencias1);
  }
  createNewRegistroDependencias(nuevaRegistroDependencias){ 
    this.ALL_RegistroDependencias1.push(nuevaRegistroDependencias);
  }
  eliminarRegistroDependencias(element){
    this.ALL_RegistroDependencias1.splice(element,1);
  }
}