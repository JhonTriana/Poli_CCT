import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Ubicacion } from '../models/ubicaciones.model';
import { UbicacionService } from '../services/ubicacion.service';
import { MatTableDataSource } from '@angular/material';
import { Sede } from '../models/sedes.model';
import { SedeService } from '../services/sede.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})
export class UbicacionComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  newUbicacion: Ubicacion ;
  misUbicaciones ; 
  sede: Sede ;
  misSedes ; 
  dataSource = new MatTableDataSource(this.misUbicaciones);
  No = 0 ;
  indiceTabla = 0 ; 
  cantidadTabla  = 0 ;
    
  constructor(private UbicacionService: UbicacionService, private SedeService: SedeService, public dialog: MatDialog ) { 
     this.getAllUbicaciones();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllUbicaciones(){
    this.UbicacionService.getAllUbicaciones().subscribe(   misUbicacionesObs => {   
      this.misUbicaciones = misUbicacionesObs['data'];   
      this.SedeService.getAllSedes().subscribe(   misSedesObs => {   
        this.misSedes = misSedesObs['data'];   
        for (let a = 0; a < this.misUbicaciones.length; a++) {
          for (let b = 0; b < this.misSedes.length; b++) {
            if ( this.misUbicaciones[a].idSede === this.misSedes[b].idSede ){
              this.misUbicaciones[a].idSede = this.misSedes[b].nombreSede ; 
            }
          }
        }
        this.dataSource = new MatTableDataSource(this.misUbicaciones);
        this.dataSource.paginator = this.paginator;
        this.newUbicacion = new Ubicacion;  
      });
    });
  }
  openDialogNuevaUbicacion(): void {
    const dialogRef = this.dialog.open(UbicacionEmergente, {
      width: '300px',
      data: { misSedes: this.misSedes , misUbicaciones: this.misUbicaciones }
    });
    dialogRef.afterClosed().subscribe(result => {      
      if ( result === undefined ||   result.nombreSede === undefined || result.nombreUbicacion === undefined ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newUbicacion.idUbicacion = this.No ; 
        this.newUbicacion.nombreUbicacion = result.nombreUbicacion ;
        for (let b = 0; b < this.misSedes.length; b++) {
          if ( result.nombreSede === this.misSedes[b].nombreSede ){
            this.newUbicacion.idSede = this.misSedes[b].idSede ;
          }
        }
        console.log("New:", this.newUbicacion);
        this.UbicacionService.createNewUbicacion(this.newUbicacion).subscribe(
          consulta => {                
          this.getAllUbicaciones();
          var r = alert('Registro Exitoso');
        });
      }
    });
  }
  openDialogEditarUbicacion(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla );
    const dialogRef = this.dialog.open(UbicacionEmergente, {
      width: '300px',
      data: { misSedes: this.misSedes, nombreUbicacion: this.misUbicaciones[element].nombreUbicacion, nombreSede: this.misUbicaciones[element].idSede }
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result.nombreSede === undefined || result.nombreUbicacion === undefined ||
           result.nombreSede === null      || result.nombreUbicacion === null  ){
          var r = alert('Datos Incompletos');
      }else{
        this.newUbicacion.idUbicacion = this.misUbicaciones[element].idUbicacion ; 
        this.newUbicacion.nombreUbicacion = result.nombreUbicacion ;
        for (let b = 0; b < this.misSedes.length; b++) {
          if ( result.nombreSede === this.misSedes[b].nombreSede ){
            this.newUbicacion.idSede = this.misSedes[b].idSede ;
          }
        }
        this.UbicacionService.editarUbicacion(this.newUbicacion).subscribe(
          consulta => {                
            this.getAllUbicaciones();
            var r = alert('Registro Exitoso');
        });
      }
    });
  }
  eliminarUbicacion(element){
    element = element + (this.indiceTabla * this.cantidadTabla );
    var r = confirm('¿Esta seguro que desea Eliminar el Registro');
    if(r === true){
      this.UbicacionService.eliminarUbicacion(this.misUbicaciones[element].idUbicacion).subscribe(
        consulta => {                
          this.getAllUbicaciones();
          var r1 = alert('Registro Eliminado Exitosamente');
          return true;
      });
    }else{
      return false;
    }
  } 
  displayedColumns: string[] = ['idUbicacion', 'nombreUbicacion', 'Sede', "star"];
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
  selector: 'Ubicacion.Emergente',
  templateUrl: 'Ubicacion.Emergente.html',
})
export class UbicacionEmergente {
  constructor(public dialogRef: MatDialogRef<UbicacionEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: { misSedes , misUbicaciones, nombreSede, nombreUbicacion } ){    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}
