//Formulario Registro Contratistas
import { Component, OnInit, Inject, ViewChild } from '@angular/core'; 
import { Registro } from '../models/registros.model';
import { RegistroService } from '../services/registro.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misRegistros ; 
  newRegistro: Registro;
  dataSource = new MatTableDataSource(this.misRegistros);
  No = 0 ;
  
  constructor(private RegistroService: RegistroService , public dialog: MatDialog ) { 
    this.getAllRegistros();
    console.log ("Mis registros.. ",this.misRegistros);
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllRegistros(){
    this.RegistroService.getAllRegistros().subscribe(   misRegistrosObs => {   this.misRegistros = misRegistrosObs;   }   )
    console.log ("Mis registros.. ",this.misRegistros);
    this.dataSource = new MatTableDataSource(this.misRegistros);
    this.newRegistro = new Registro;
    for (let i = 0; i < this.misRegistros.length -1 ; i++) {
      if(this.misRegistros[i].idRegistro === undefined){
        this.No = 1 ;
      }else if(this.misRegistros[i].idRegistro > this.misRegistros[i+1].idRegistro) {
        this.No = this.misRegistros[i].idRegistro + 1 ;
      }else{
        this.No = this.misRegistros[i+1].idRegistro + 1 ;
      }
    }
  }
  openDialogNuevaRegistro(): void {
    const dialogRef = this.dialog.open(RegistroEmergente, {
      width: '400px',
      data: {idRegistro: this.misRegistros.idRegistro , ntCcRegistro: this.misRegistros.ntCcRegistro , nombreRegistro: this.misRegistros.nombreRegistro , direccionRegistro: this.misRegistros.direccionRegistro , ciudadRegistro: this.misRegistros.ciudadRegistro , telefonoRegistro: this.misRegistros.telefonoRegistro , celularRegistro: this.misRegistros.celularRegistro } 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Result: ",result);
      this.newRegistro.ntCcRegistro = result.ntCcRegistro;
      this.newRegistro.nombreRegistro = result.nombreRegistro;
      this.newRegistro.direccionRegistro = result.direccionRegistro;
      this.newRegistro.ciudadRegistro = result.ciudadRegistro;
      this.newRegistro.telefonoRegistro = result.telefonoRegistro;
      this.newRegistro.celularRegistro = result.celularRegistro;
      if (this.newRegistro.ntCcRegistro === undefined || this.newRegistro.nombreRegistro === undefined || this.newRegistro.direccionRegistro === undefined || this.newRegistro.ciudadRegistro === undefined || this.newRegistro.telefonoRegistro === undefined || this.newRegistro.celularRegistro === undefined ){
      }
      else{
        this.newRegistro.idRegistro = this.No ; 
        this.RegistroService.createNewRegistro(this.newRegistro);
        this.getAllRegistros();
      }
    });
  }
  openDialogEditarRegistro(element): void {
    const dialogRef = this.dialog.open(RegistroEmergente, {
      width: '300px',
      data: {idRegistro: this.misRegistros[element].idRegistro , ntCcRegistro: this.misRegistros[element].ntCcRegistro , nombreRegistro: this.misRegistros[element].nombreRegistro , direccionRegistro: this.misRegistros[element].direccionRegistro , ciudadRegistro: this.misRegistros[element].ciudadRegistro , telefonoRegistro: this.misRegistros[element].telefonoRegistro , celularRegistro: this.misRegistros[element].celularRegistro } 
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined ){
      }
      else{
       this.RegistroService.editarregistro(element, result.ntCcRegistro, result.nombreRegistro, result.direccionRegistro, result.ciudadRegistro, result.telefonoRegistro, result.celularRegistro );
        this.getAllRegistros();
      }
    });
  }
  eliminarRegistro(element){
    this.RegistroService.eliminarRegistro(element);
    this.getAllRegistros();
  } 
  displayedColumns: string[] = ['idRegistro', 'ntCcRegistro', 'nombreRegistro' , 'direccionRegistro' , 'ciudadRegistro' , 'telefonoRegistro' , 'celularRegistro' ,"star"];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
@Component({
  selector: 'registro.Emergente',
  templateUrl: 'registro.Emergente.html',
})
export class RegistroEmergente {
  constructor(public dialogRef: MatDialogRef<RegistroEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: {idRegistro, ntCcRegistro , nombreRegistro , direccionRegistro , ciudadRegistro , telefonoRegistro , celularRegistro } ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}