import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { usuario } from 'app/models/usuario.model';
import { UsuarioService } from 'app/services/usuario.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  No = 0 ;
  indiceTabla = 0 ; 
  cantidadTabla  = 0 ; 

  constructor(private UsuarioService: UsuarioService , public dialog: MatDialog, private TipoUsuarioService: TipoUsuarioService) { 
    this.getAllUsuarios();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllUsuarios(){
    this.UsuarioService.getAllUsuarios().subscribe( misUsuariosObs => { 
      this.misUsuarios = misUsuariosObs['data'] ; 
      this.TipoUsuarioService.getAllTiposUsuario().subscribe( misTiposUsuarioObs => { 
        this.misTiposUsuario = misTiposUsuarioObs; 
        this.dataSource = new MatTableDataSource(this.misUsuarios);
        this.dataSource.paginator = this.paginator;
        this.newUsuario = new usuario;      
      });
    });
  }
  openDialogNuevoUsuario(): void { 
    const dialogRef = this.dialog.open(UsuarioEmergente, {
      width: '300px',
      data: { misTiposUsuario: this.misTiposUsuario }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.documentoUser === undefined ||   result.userName === undefined ||   result.userType === undefined ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newUsuario.idUser = this.No ; 
        this.newUsuario.documentoUser = result.documentoUser ; 
        this.newUsuario.userName = result.userName ;         
        this.newUsuario.userType = result.userType ; 
        this.UsuarioService.createNewUsuario(this.newUsuario).subscribe(  
          consulta => {                
            this.getAllUsuarios();
            var r = alert('Registro Exitoso');
        });
      }
    });
  }
  eliminarUsuario(element){
    element = element + (this.indiceTabla * this.cantidadTabla );
    var r = confirm('¿Esta seguro que desea Eliminar el Registro?');
    if(r === true){
      this.UsuarioService.eliminarUsuario(this.misUsuarios[element].idUser).subscribe(
        consulta => {                
          this.getAllUsuarios();                         //Se Manetiene Igual  
          var r = alert('Registro Exitoso');
          return true ; 
      }); //Se Manetiene Igual
    }else{
      return false ;
    }
  } 
  openDialogEditarUsuario(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla );
    const dialogRef = this.dialog.open(UsuarioEmergente, {
      width: '300px',
      data: { misTiposUsuario: this.misTiposUsuario, userName: this.misUsuarios[element].userName,
              documentoUser: this.misUsuarios[element].documentoUser, userType: this.misUsuarios[element].userType }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.documentoUser === undefined ||   result.userName === undefined ||   result.userType === undefined   ||
          result.documentoUser === null      ||   result.userName === null      ||   result.userType === null        ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newUsuario.idUser = this.misUsuarios[element].idUser ; 
        this.newUsuario.documentoUser = result.documentoUser ; 
        this.newUsuario.userName = result.userName ;         
        this.newUsuario.userType = result.userType ; 
        this.UsuarioService.editarUsuario(this.newUsuario).subscribe(
          consulta => {                
            this.getAllUsuarios();
            var r = alert('Registro Exitoso');
        });
      }
    });
  }
  displayedColumns: string[] = ['idUser', 'userName', 'documentoUser', 'userType',"star"];
  dataSource = new MatTableDataSource(this.misUsuarios);
  ngAfterViewInit() {
    this.paginator.page.subscribe( 
      (event) => {   
        this.indiceTabla = event.pageIndex ;   
        this.cantidadTabla = event.pageSize ;   
      });
  }
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
    @Inject(MAT_DIALOG_DATA)  public data: { misTiposUsuario, userName, documentoUser, userType } ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}