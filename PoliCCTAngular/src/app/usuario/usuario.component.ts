import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { usuario } from 'app/models/usuario.model';
import { UsuarioService } from 'app/services/usuario.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  newUsuario: usuario;
  misUsuarios ; 
  No = 1 ; 
  constructor(private UsuarioService: UsuarioService , public dialog: MatDialog ) { 
    this.newUsuario = new usuario;
    this.getAllUsuarios();
    this.dataSource = new MatTableDataSource(this.misUsuarios);
  }
  nuevoUsuario(){
    if (this.newUsuario.nombreCompletoUsuario === undefined ){
    }
    else{
      this.newUsuario.numeroDocumentoUsuario = this.No ; 
      this.UsuarioService.createNewUsuario(this.newUsuario);
      this.No = this.No + 1 ;
      this.newUsuario = new usuario;
      this.getAllUsuarios();
    }
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllUsuarios(){
    this.UsuarioService.getAllUsuarios().subscribe( misUsuariosObs => { this.misUsuarios = misUsuariosObs; } )
    this.dataSource = new MatTableDataSource(this.misUsuarios);
  }
  
  openDialogNuevoUsuario(): void { 
    const dialogRef = this.dialog.open(UsuarioEmergente, {
      width: '300px',
      data: { usuario }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newUsuario.nombreCompletoUsuario = result;
      if (this.newUsuario.nombreCompletoUsuario === undefined ){
      }
      else{
        this.newUsuario.numeroDocumentoUsuario = this.No ; 
        this.UsuarioService.createNewUsuario(this.newUsuario);
        this.getAllUsuarios();
      }
    });
  }

  displayedColumns: string[] = ['numeroDocumentoUsuario', 'nombreCompletoUsuario', 'tipoUsuario',"star"];
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
    @Inject(MAT_DIALOG_DATA)  public data: usuario ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}