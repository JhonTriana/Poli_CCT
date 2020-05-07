import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Sede } from '../models/sedes.model';
import { SedeService } from '../services/sede.service';
import { MatTableDataSource } from '@angular/material';
import { Ciudad } from '../models/ciudades.model';
import { CiudadService } from '../services/ciudad.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.scss']
})
export class SedeComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  newSede: Sede;
  misSedes ; 
  ciudad: Ciudad ; 
  misCiudades ; 
  dataSource = new MatTableDataSource(this.misSedes);
  No = 0 ;
  
  constructor(private SedeService: SedeService, 
    private CiudadService: CiudadService, public dialog: MatDialog ) { 
     this.getAllSedes();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllSedes(){
    this.SedeService.getAllSedes().subscribe(   misSedesObs => {   this.misSedes = misSedesObs;   }   )
    this.CiudadService.getAllCiudades().subscribe(   misCiudadesObs => {   this.misCiudades = misCiudadesObs;   }   )
    for (let a = 0; a < this.misSedes.length; a++) {
      for (let b = 0; b < this.misCiudades.length; b++) {
        if ( this.misSedes[a].idCiudad === this.misCiudades[b].idCiudad ){
          this.misSedes[a].idCiudad = this.misCiudades[b].nombreCiudad ; 
        }
      }
    }
    this.dataSource = new MatTableDataSource(this.misSedes);
    this.newSede = new Sede;
    for (let i = 0; i < this.misSedes.length -1 ; i++) {
      if(this.misSedes[i].idSede === undefined){
        this.No = 1 ;
      }else if(this.misSedes[i].idSede > this.misSedes[i+1].idSede) {
        this.No = this.misSedes[i].idSede + 1 ;
      }else{
        this.No = this.misSedes[i+1].idSede + 1 ;
      }
    }
  }
  openDialogNuevaSede(): void {
    const dialogRef = this.dialog.open(SedeEmergente, {
      width: '300px',
      data: { misCiudades: this.misCiudades , misSedes: this.misSedes }
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result.nombreCiudad === undefined || result.nombreSede === undefined ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newSede.idSede = this.No ; 
        this.newSede.nombreSede = result.nombreSede ;
        for (let b = 0; b < this.misCiudades.length; b++) {
          if ( result.nombreCiudad === this.misCiudades[b].nombreCiudad ){
            this.newSede.idCiudad = this.misCiudades[b].idCiudad ;
          }
        }
        this.SedeService.createNewSede(this.newSede);
        this.getAllSedes();
        var r = alert('Registro Exitoso');
      }
    });
  }
  openDialogEditarSede(element): void {
    const dialogRef = this.dialog.open(SedeEmergente, {
      width: '300px',
      data: { misCiudades: this.misCiudades, nombreSede: this.misSedes[element].nombreSede, nombreCiudad: this.misSedes[element].idCiudad }
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result.nombreCiudad === undefined || result.nombreSede === undefined ||
        result.nombreCiudad === null || result.nombreSede === null ){
        var r = alert('Datos Incompletos');
      }
      else{
        for (let b = 0; b < this.misCiudades.length; b++) {
          if ( result.nombreCiudad === this.misCiudades[b].nombreCiudad ){
            this.newSede.idCiudad = this.misCiudades[b].idCiudad ;
          }
        }
        this.SedeService.editarSede(element, this.newSede.idCiudad , result.nombreSede);
        this.getAllSedes();
        var r = alert('Registro Exitoso');
      }
    });
  }
  eliminarSede(element){
    var r = confirm('¿Esta seguro que desea Eliminar el Registro');
    if(r === true){
      this.SedeService.eliminarSede(element);
      this.getAllSedes();
      var r1 = alert('Registro Eliminado Exitosamente');
      return true;
    }else{
      return false;
    }
  } 
  displayedColumns: string[] = ['idSede', 'nombreSede', 'Ciudad', "star"];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
@Component({
  selector: 'sede.Emergente',
  templateUrl: 'sede.Emergente.html',
})
export class SedeEmergente {
  constructor(public dialogRef: MatDialogRef<SedeEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: { misCiudades , misSedes, nombreCiudad, nombreSede } ){    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}