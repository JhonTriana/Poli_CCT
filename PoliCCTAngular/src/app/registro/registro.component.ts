//Formulario Registro Contratistas
import { Component, OnInit, Inject, ViewChild } from '@angular/core'; 
import { Registro } from '../models/registros.model';
import { RegistroService } from '../services/registro.service';
import { MatTableDataSource } from '@angular/material';
import { Ciudad } from '../models/ciudades.model';      //Se importa Ciudad
import { CiudadService } from '../services/ciudad.service';  //Se importa Ciudad Service
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  newRegistro: Registro;
  misRegistros ;
  ciudad: Ciudad ; //Se agrega ciudad
  misCiudades ;   //Se agrega del servicio
  dataSource = new MatTableDataSource(this.misCiudades); //Se cambio por this.misRegistros
  No = 0 ;
  
  constructor(private RegistroService: RegistroService , private CiudadService: CiudadService, public dialog: MatDialog ) { 
    this.getAllRegistros();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllRegistros(){
    this.RegistroService.getAllRegistros().subscribe(   misRegistrosObs => {   this.misRegistros = misRegistrosObs;   }   )
    //se agrega ciudad de aca en adelante
    this.CiudadService.getAllCiudades().subscribe(   misCiudadesObs => {   this.misCiudades = misCiudadesObs;   }   )        //se agrega de mis CiudadesObs
    for (let a = 0; a < this.misRegistros.length; a++) {
      for (let b = 0; b < this.misCiudades.length; b++) {
        if (this.misRegistros[a].idCiudad === this.misCiudades[b].idCiudad) {
          this.misRegistros[a].idCiudad = this.misCiudades[b].nombreCiudad;
        }
      }
    }
    //hasta aca
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
      data: {idRegistro: this.misRegistros.idRegistro , ntCcRegistro: this.misRegistros.ntCcRegistro , nombreRegistro: this.misRegistros.nombreRegistro , direccionRegistro: this.misRegistros.direccionRegistro , misCiudades: this.misCiudades  , /* ciudadRegistro: this.misRegistros.ciudadRegistro ,*/ telefonoRegistro: this.misRegistros.telefonoRegistro , celularRegistro: this.misRegistros.celularRegistro } 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Result: ",result);
      this.newRegistro.ntCcRegistro = result.ntCcRegistro;
      this.newRegistro.nombreRegistro = result.nombreRegistro;
      this.newRegistro.direccionRegistro = result.direccionRegistro;
      /*this.newRegistro.ciudadRegistro = result.ciudadRegistro; esto se quita lo consume de idCiudad*/
      this.newRegistro.telefonoRegistro = result.telefonoRegistro;
      this.newRegistro.celularRegistro = result.celularRegistro;
      if (this.newRegistro.ntCcRegistro === undefined || this.newRegistro.nombreRegistro === undefined || this.newRegistro.direccionRegistro === undefined || /*this.newRegistro.ciudadRegistro === undefined */ result.nombreCiudad === undefined || this.newRegistro.telefonoRegistro === undefined || this.newRegistro.celularRegistro === undefined ){
      }
      else{
        this.newRegistro.idRegistro = this.No ; 
        for (let b = 0; b < this.misCiudades.length; b++) {
          if ( result.nombreCiudad === this.misCiudades[b].nombreCiudad ){
            this.newRegistro.idCiudad = this.misCiudades[b].idCiudad;
          }
        }
        this.RegistroService.createNewRegistro(this.newRegistro);
        this.getAllRegistros();
        var r = alert('Registro Exitoso');
      }
    });
  }
  openDialogEditarRegistro(element): void {
    const dialogRef = this.dialog.open(RegistroEmergente, {
      width: '400px',
      data: { misCiudades: this.misCiudades, idRegistro: this.misRegistros[element].idRegistro , ntCcRegistro: this.misRegistros[element].ntCcRegistro , nombreRegistro: this.misRegistros[element].nombreRegistro , direccionRegistro: this.misRegistros[element].direccionRegistro ,
        /* ciudadRegistro: this.misRegistros[element].ciudadRegistro */ nombreCiudad: this.misRegistros[element].idCiudad , telefonoRegistro: this.misRegistros[element].telefonoRegistro , celularRegistro: this.misRegistros[element].celularRegistro } 
    });
    dialogRef.afterClosed().subscribe(result => {
      if (  result === undefined || result.nombreCiudad === undefined ){
      }
      else{
       this.RegistroService.editarregistro(element, result.ntCcRegistro, result.nombreRegistro, result.direccionRegistro, /* result.ciudadRegistro */ result.nombreCiudad, result.telefonoRegistro, result.celularRegistro );
        this.getAllRegistros();
        var r = alert('Registro Exitoso');
      }
    });
  }
  eliminarRegistro(element){
    var r = confirm('¿Esta seguro que desea Eliminar el Registro?');
    if(r === true){
          this.RegistroService.eliminarRegistro(element);
          this.getAllRegistros();
          return true ; 
    }else{
      return false ;
    }  
  }  
  displayedColumns: string[] = ['idRegistro', 'ntCcRegistro', 'nombreRegistro' , 'direccionRegistro' , /*'ciudadRegistro'*/ 'nombreCiudad' , 'telefonoRegistro' , 'celularRegistro' ,"star"];
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
    @Inject(MAT_DIALOG_DATA)  public data: { misCiudades, idRegistro, ntCcRegistro , nombreRegistro , direccionRegistro , /*ciudadRegistro*/ nombreCiudad , telefonoRegistro , celularRegistro } ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}