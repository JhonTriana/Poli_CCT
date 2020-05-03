import { Injectable } from '@angular/core';
import { RegistroDependencias } from '../models/registrodependencias1.model';
import { Observable, of } from 'rxjs';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RegistroDependenciasService {

  ALL_RegistroDependencias1: RegistroDependencias [] = [
    
      { idRegistroDependencias: 1, ntCcRegistroDependencias: 500500, nombreRegistroDependencias: "Marck", cargoRegistroDependencias: "Administrador", areaRegistroDependencias: "Admiciones", celularRegistroDependencias:3700700, telefonoRegistroDependencias:600698, extensionRegistroDependencias:123, correoElectronicoRegistroDependencias: "a@b.com" },
      { idRegistroDependencias: 2, ntCcRegistroDependencias: 89999, nombreRegistroDependencias: "Plinio", cargoRegistroDependencias: "Operario", areaRegistroDependencias: "Produccion", celularRegistroDependencias:7777777, telefonoRegistroDependencias:800000, extensionRegistroDependencias:789, correoElectronicoRegistroDependencias: "aaaapp@pi.com" }
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

  editarregistroDependencias(element, ntCcRegistroDependencias, nombreRegistroDependencias, cargoRegistroDependencias, areaRegistroDependencias, celularRegistroDependencias, telefonoRegistroDependencias, extensionRegistroDependencias, correoElectronicoRegistroDependencias){
    this.ALL_RegistroDependencias1[element].ntCcRegistroDependencias = ntCcRegistroDependencias;
    this.ALL_RegistroDependencias1[element].nombreRegistroDependencias = nombreRegistroDependencias;
    this.ALL_RegistroDependencias1[element].cargoRegistroDependencias = cargoRegistroDependencias;
    this.ALL_RegistroDependencias1[element].areaRegistroDependencias = areaRegistroDependencias;
    this.ALL_RegistroDependencias1[element].celularRegistroDependencias = celularRegistroDependencias;
    this.ALL_RegistroDependencias1[element].telefonoRegistroDependencias = telefonoRegistroDependencias;
    this.ALL_RegistroDependencias1[element].extensionRegistroDependencias = extensionRegistroDependencias;
    this.ALL_RegistroDependencias1[element].correoElectronicoRegistroDependencias = correoElectronicoRegistroDependencias;
  }
  
}