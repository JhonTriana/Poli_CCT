import { Injectable } from '@angular/core';
import { usuario } from '../models/usuario.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  ALL_Usuarios: usuario [] = [
    {   numeroDocumentoUsuario: 1003560,   nombreCompletoUsuario: "Tatiana Cañón", tipoUsuario: "Proveedor" },
    {   numeroDocumentoUsuario: 1070950,   nombreCompletoUsuario: "Julián Vargas", tipoUsuario: "Empleado" },
    {   numeroDocumentoUsuario: 1053561,   nombreCompletoUsuario: "Nasly Gordillo", tipoUsuario: "Seguridad Física" },
    {   numeroDocumentoUsuario: 1080750,   nombreCompletoUsuario: "Gina Torres", tipoUsuario: "Administrador" },
]

  constructor() { }
  
  getAllUsuarios() : Observable<usuario[]> {
    return of (this.ALL_Usuarios);
  }
  createNewUsuario(nuevoUsuario){ 
    this.ALL_Usuarios.push(nuevoUsuario);
  }
  async getUsuarioById(id){
    const index = await this.ALL_Usuarios.findIndex( nombre => nombre.numeroDocumentoUsuario === id  );
    console.log("Indice:" + index);
    return this.ALL_Usuarios[index] ;
  }
}

  

