import { Injectable } from '@angular/core';
import { Registro } from '../models/registros.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  ALL_Registros: Registro [] = [
    
      {   idRegistro: 1, ntCcRegistro: 100100, nombreRegistro: "Jack", direccionRegistro: "Calle 5", /*ciudadRegistro: "Bogota"*/ idCiudad: 1, telefonoRegistro:2909090, celularRegistro:800800 },
      {   idRegistro: 2, ntCcRegistro: 200200, nombreRegistro: "Peter", direccionRegistro: "Av 5", /*ciudadRegistro: "Rio de Janeiro"*/idCiudad: 2, telefonoRegistro:9000000, celularRegistro:78989898 },
      {   idRegistro: 3, ntCcRegistro: 2535536, nombreRegistro: "Simpson Homer", direccionRegistro: "69 Old PlumTree BLVD", /*ciudadRegistro: "Springfield"*/ idCiudad : 3, telefonoRegistro:5556528, celularRegistro:78989898 }
]
  constructor() { }
  getAllRegistros() : Observable<Registro[]>{
    return of (this.ALL_Registros);
  }
  createNewRegistro(nuevaRegistro){ 
    this.ALL_Registros.push(nuevaRegistro);
  }
  eliminarRegistro(element){
    this.ALL_Registros.splice(element,1);
  }
editarregistro(element, ntCcRegistro, nombreRegistro, direccionRegistro, /*ciudadRegistro*/ idCiudad, telefonoRegistro, celularRegistro){
  this.ALL_Registros[element].ntCcRegistro =ntCcRegistro;
  this.ALL_Registros[element].nombreRegistro = nombreRegistro;
  this.ALL_Registros[element].direccionRegistro = direccionRegistro;
  this.ALL_Registros[element].idCiudad = idCiudad ;
 // this.ALL_Registros[element].ciudadRegistro = ciudadRegistro;
  this.ALL_Registros[element].telefonoRegistro = telefonoRegistro;
  this.ALL_Registros[element].celularRegistro = celularRegistro;
}

}