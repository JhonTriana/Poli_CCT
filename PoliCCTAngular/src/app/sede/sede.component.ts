import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SedeService } from '../services/sede.service';
import { MatTableDataSource } from '@angular/material';
import { Sede } from '../models/sedes.model';
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
  newSede ;
  misSedes ; 
  misCiudades ; 
  dataSource = new MatTableDataSource(this.misSedes);
  No = 0 ;
  indiceTabla = 0 ; 
  cantidadTabla  = 0 ;
 
  constructor(private SedeService: SedeService, private CiudadService: CiudadService, public dialog: MatDialog ) { 
     this.getAllSedes();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllSedes(){
    this.SedeService.getAllSedes().subscribe(   misSedesObs => {   
      this.misSedes = misSedesObs['data'];   
      this.CiudadService.getAllCiudades().subscribe(   misCiudadesObs => {   
        this.misCiudades = misCiudadesObs['data'];   
        for (let a = 0; a < this.misSedes.length; a++) {
          for (let b = 0; b < this.misCiudades.length; b++) {
            if ( this.misSedes[a].idCiudad === this.misCiudades[b].idCiudad ){
              this.misSedes[a].idCiudad = this.misCiudades[b].ciudadname ; 
            }
          }
        }
        this.dataSource = new MatTableDataSource(this.misSedes);
        this.dataSource.paginator = this.paginator;
        this.newSede = new Sede ;
      });
    });   
  }
  openDialogNuevaSede(): void {
    const dialogRef = this.dialog.open(SedeEmergente, {
      width: '300px',
      data: { misCiudades: this.misCiudades , misSedes: this.misSedes }
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result.ciudadname === undefined || result.nombreSede === undefined ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newSede.idSede = this.No ; 
        this.newSede.nombreSede = result.nombreSede ;
        for (let b = 0; b < this.misCiudades.length; b++) {
          if ( result.ciudadname === this.misCiudades[b].ciudadname ){
            this.newSede.idCiudad = this.misCiudades[b].idCiudad ;
          }
        }
        this.SedeService.createNewSede(this.newSede).subscribe(
          consulta => {                
            this.getAllSedes();
            var r = alert('Registro Exitoso');
        });
      }
    });
  }
  openDialogEditarSede(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla );
    const dialogRef = this.dialog.open(SedeEmergente, {
      width: '300px',
      data: { misCiudades: this.misCiudades, nombreSede: this.misSedes[element].nombreSede, ciudadname: this.misSedes[element].idCiudad }
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result.ciudadname === undefined || result.nombreSede === undefined ||
           result.ciudadname === null      || result.nombreSede === null ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newSede.idSede = this.misSedes[element].idSede ;
        this.newSede.nombreSede = result.nombreSede ;
        for (let b = 0; b < this.misCiudades.length; b++) {
          if ( result.ciudadname === this.misCiudades[b].ciudadname ){
            this.newSede.idCiudad = this.misCiudades[b].idCiudad ;
          }
        }
        this.SedeService.editarSede(this.newSede).subscribe();
        this.getAllSedes();
        var r = alert('Registro Exitoso');
      }
    });
  }
  eliminarSede(element){
    element = element + (this.indiceTabla * this.cantidadTabla );
    var r = confirm('¿Esta seguro que desea Eliminar el Registro');
    if(r === true){
      this.SedeService.eliminarSede(this.misSedes[element].idSede).subscribe();
      this.getAllSedes();
      var r1 = alert('Registro Eliminado Exitosamente');
      return true;
    }else{
      return false;
    }
  } 
  displayedColumns: string[] = ['idSede', 'nombreSede', 'idCiudad', "star"];
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
  selector: 'sede.Emergente',
  templateUrl: 'sede.Emergente.html',
})
export class SedeEmergente {
  constructor(public dialogRef: MatDialogRef<SedeEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: { misCiudades , misSedes, ciudadname, nombreSede } ){    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}