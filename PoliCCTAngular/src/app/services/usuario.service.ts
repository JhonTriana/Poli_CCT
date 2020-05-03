import { Injectable } from '@angular/core';
import { usuario } from '../models/usuario.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  ALL_Usuarios: usuario [] = [
    {   idUsuario: 1, numeroDocumentoUsuario: 1003560,   nombreCompletoUsuario: "Tatiana Cañón", tipoUsuario: "Proveedor" },
    {   idUsuario: 2, numeroDocumentoUsuario: 1070950,   nombreCompletoUsuario: "Julián Vargas", tipoUsuario: "Empleado" },
    {   idUsuario: 3, numeroDocumentoUsuario: 1053561,   nombreCompletoUsuario: "Nasly Gordillo", tipoUsuario: "Seguridad Física" },
    {   idUsuario: 4, numeroDocumentoUsuario: 1080750,   nombreCompletoUsuario: "Gina Torres", tipoUsuario: "Administrador" },
]

  constructor() { }  
  getAllUsuarios() : Observable<usuario[]> {
    return of (this.ALL_Usuarios);
  }
  createNewUsuario(nuevoUsuario){ 
    this.ALL_Usuarios.push(nuevoUsuario);
  }
  eliminarUsuario(element){
    this.ALL_Usuarios.splice(element, 1);
  } 
  editarUsuario(element, numeroDocumentoUsuario, nombreCompletoUsuario, nombreTipoUsuario){
    this.ALL_Usuarios[element].numeroDocumentoUsuario = numeroDocumentoUsuario ;
    this.ALL_Usuarios[element].nombreCompletoUsuario = nombreCompletoUsuario ;
    this.ALL_Usuarios[element].tipoUsuario = nombreTipoUsuario ;
  }

}

  

