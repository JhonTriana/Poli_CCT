import { Injectable } from '@angular/core';
import { tipoUsuario } from 'app/models/tipoUsuario.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  ALL_tipoUsuario: tipoUsuario [] = [
    {   idTipoUsuario: 1,   nombreTipoUsuario: "Seguridad Física"   },
    {   idTipoUsuario: 2,   nombreTipoUsuario: "Proveedor"          },
    {   idTipoUsuario: 3,   nombreTipoUsuario: "Administrador"      },
    {   idTipoUsuario: 4,   nombreTipoUsuario: "Empleado"           }
]

  constructor() { }

  getAllTiposUsuario() : Observable<tipoUsuario[]> {
    return of (this.ALL_tipoUsuario);
  }

}
