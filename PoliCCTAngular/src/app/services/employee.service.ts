import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';;
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  
  constructor() { }
  getAllEmpleados(){//}: Observable<{}>{
    //return of (this.ALL_Empleados);
  }
  createNewEmpleado(nuevoEmpleado){ 
    //this.ALL_Empleados.push(nuevoEmpleado);
  }
  eliminarEmpleado(element){
    //this.ALL_Empleados.splice(element,1);
  }
  editarEmpleado(element, identificacion, nombreEmpleado, direccion, telefono, cargo, contacto, numero_contacto, mail){ 
    /*this.ALL_Empleados[element].nombreEmpleado=nombreEmpleado;
    this.ALL_Empleados[element].identificacion=identificacion;
    this.ALL_Empleados[element].direccion=direccion;
    this.ALL_Empleados[element].telefono=telefono;
    this.ALL_Empleados[element].cargo=cargo;
    this.ALL_Empleados[element].contacto=contacto;
    this.ALL_Empleados[element].numero_contacto=numero_contacto;
    this.ALL_Empleados[element].mail=mail;
    */
  }
}