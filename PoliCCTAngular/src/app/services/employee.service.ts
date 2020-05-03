import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';;
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  ALL_Empleados: Empleado [] = [
    
      { idContratista: 1, nombreEmpleado: "Nasly", identificacion: 100100, direccion:  "Calle 552", telefono: 2909090, cargo: "Administrador", contacto:"jose", numero_contacto:1234,mail:"nans@jahs.com"},
      { idContratista: 2, nombreEmpleado: "Tatiana", identificacion: 200200, direccion: "Av 5 - 7", telefono: 9000000, cargo:"Administrador", contacto:"Maria", numero_contacto: 1234, mail: "khdakdh@jahd.com" },
      { idContratista: 3, nombreEmpleado: "Gina", identificacion: 2535536, direccion:  "Calle 15", telefono: 5556528, cargo:" aDministrador", contacto: "joel",numero_contacto: 123, mail:"dhag@jdha.com"}
]
  constructor() { }
  getAllEmpleados() : Observable<Empleado[]>{
    return of (this.ALL_Empleados);
  }
  createNewEmpleado(nuevoEmpleado){ 
    this.ALL_Empleados.push(nuevoEmpleado);
  }
  eliminarEmpleado(element){
    this.ALL_Empleados.splice(element,1);
  }
  editarEmpleado(element, identificacion, nombreEmpleado, direccion, telefono, cargo, contacto, numero_contacto, mail){ 
    this.ALL_Empleados[element].nombreEmpleado=nombreEmpleado;
    this.ALL_Empleados[element].identificacion=identificacion;
    this.ALL_Empleados[element].direccion=direccion;
    this.ALL_Empleados[element].telefono=telefono;
    this.ALL_Empleados[element].cargo=cargo;
    this.ALL_Empleados[element].contacto=contacto;
    this.ALL_Empleados[element].numero_contacto=numero_contacto;
    this.ALL_Empleados[element].mail=mail;
  
  }
}