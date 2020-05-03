import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { usuario } from 'app/models/usuario.model';
import { UsuarioService } from 'app/services/usuario.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { tipoUsuario } from 'app/models/tipoUsuario.model';
import { TipoUsuarioService } from '../services/tipo-usuario.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  newUsuario: usuario;
  misTiposUsuario;
  misUsuarios ; 
  No = 1 ; 

  constructor(private UsuarioService: UsuarioService , public dialog: MatDialog, 
              private TipoUsuarioService: TipoUsuarioService) { 
    this.getAllUsuarios();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllUsuarios(){
    this.UsuarioService.getAllUsuarios().subscribe( misUsuariosObs => { this.misUsuarios = misUsuariosObs; } )
    this.TipoUsuarioService.getAllTiposUsuario().subscribe( misTiposUsuarioObs => { this.misTiposUsuario = misTiposUsuarioObs; } )
    this.dataSource = new MatTableDataSource(this.misUsuarios);
    this.newUsuario = new usuario;

    for (let i = 0; i < this.misUsuarios.length -1 ; i++) {
      if(this.misUsuarios[i].idUsuario === undefined){
        this.No = 1 ;
      }else if(this.misUsuarios[i].idUsuario > this.misUsuarios[i+1].idUsuario) {
        this.No = this.misUsuarios[i].idUsuario + 1 ;
      }else{
        this.No = this.misUsuarios[i+1].idUsuario + 1 ;
      }
    }
  }
  openDialogNuevoUsuario(): void { 
    const dialogRef = this.dialog.open(UsuarioEmergente, {
      width: '300px',
      data: { usuario: this.newUsuario, misTiposUsuario: this.misTiposUsuario}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newUsuario.numeroDocumentoUsuario = result.usuario.numeroDocumentoUsuario;
      this.newUsuario.nombreCompletoUsuario = result.usuario.nombreCompletoUsuario;
      this.newUsuario.tipoUsuario = result.tipo;
      if (result.usuario.numeroDocumentoUsuario === undefined ||  
        result.usuario.nombreCompletoUsuario === undefined ||
        result.tipo === undefined ){
      }
      else{
        this.newUsuario.idUsuario = this.No ; 
        console.log("Nuevo2: " , this.newUsuario);
        this.UsuarioService.createNewUsuario(this.newUsuario);
        this.getAllUsuarios();
      }
    });
  }
  eliminarUsuario(element){
    this.UsuarioService.eliminarUsuario(element);
    this.getAllUsuarios();
  } 
  openDialogEditarUsuario(element): void {
    console.log("this.misUsuarios[element]: ", this.misUsuarios[element], " this.misUsuarios[element].TipoUsuario: ", this.misUsuarios[element].tipoUsuario);
    const dialogRef = this.dialog.open(UsuarioEmergente, {
      width: '300px',
      data: { usuario: this.misUsuarios[element], misTiposUsuario: this.misTiposUsuario,
         tipo: this.misUsuarios[element].tipoUsuario}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
      if (result === undefined ){
      }
      else{
        this.UsuarioService.editarUsuario(element, result.usuario.numeroDocumentoUsuario, 
          result.usuario.nombreCompletoUsuario, result.tipo);
        this.getAllUsuarios();
      }
    });
  }

  displayedColumns: string[] = ['idUsuario', 'numeroDocumentoUsuario', 'nombreCompletoUsuario', 'tipoUsuario',"star"];
  dataSource = new MatTableDataSource(this.misUsuarios);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'usuario.emergente',
  templateUrl: 'usuario.emergente.html',
})
export class UsuarioEmergente {
  constructor(public dialogRef: MatDialogRef<UsuarioEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: {usuario, misTiposUsuario, tipo} ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}