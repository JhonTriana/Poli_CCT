import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Actividad } from '../models/actividades.model';
import { ActividadService } from '../services/actividad.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misActividades ; 
  newActividad: Actividad;
  dataSource = new MatTableDataSource(this.misActividades);
  No = 0 ;
  
  constructor(private ActividadService: ActividadService , public dialog: MatDialog ) { 
    this.getAllActividades();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllActividades(){
    this.ActividadService.getAllActividades().subscribe(   misActividadesObs => {   this.misActividades = misActividadesObs;   }   )
    this.dataSource = new MatTableDataSource(this.misActividades);
    this.newActividad = new Actividad;
    for (let i = 0; i < this.misActividades.length -1 ; i++) {
      if(this.misActividades[i].idActividad === undefined){
        this.No = 1 ;
      }else if(this.misActividades[i].idActividad > this.misActividades[i+1].idActividad) {
        this.No = this.misActividades[i].idActividad + 1 ;
      }else{
        this.No = this.misActividades[i+1].idActividad + 1 ;
      }
    }
  }
  openDialogNuevaActividad(): void {
    const dialogRef = this.dialog.open(ActividadEmergente, {
      width: '300px',
      data: { Actividad }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newActividad.nombreActividad = result;
      if (this.newActividad.nombreActividad === undefined ){
      }
      else{
        this.newActividad.idActividad = this.No ; 
        this.ActividadService.createNewActividad(this.newActividad);
        this.getAllActividades();
      }
    });
  }
  openDialogEditarActividad(element): void {
    const dialogRef = this.dialog.open(ActividadEmergente, {
      width: '300px',
      data: { nombreActividad: this.misActividades[element].nombreActividad }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined ){
      }
      else{
        this.ActividadService.editarActividad(element, result);
        this.getAllActividades();
      }
    });
  }
  eliminarActividad(element){
    this.ActividadService.eliminarActividad(element);
    this.getAllActividades();
  } 
  displayedColumns: string[] = ['idActividad', 'nombreActividad', "star"];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
@Component({
  selector: 'actividad.Emergente',
  templateUrl: 'actividad.Emergente.html',
})
export class ActividadEmergente {
  constructor(public dialogRef: MatDialogRef<ActividadEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: Actividad ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}