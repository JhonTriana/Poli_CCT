import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Actividad } from '../models/actividades.model';
import { ActividadService } from '../services/actividad.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})

export class ActividadComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  newActividad: Actividad;
  misActividades ; 
  No = 4 ; 
  constructor(private ActividadService: ActividadService , public dialog: MatDialog ) { 
    this.newActividad = new Actividad;
    this.getAllActividades();
    this.dataSource = new MatTableDataSource(this.misActividades);
  }
  nuevaActividad(){
    if (this.newActividad.nombreActividad === undefined ){
    }
    else{
      this.newActividad.idActividad = this.No ; 
      this.ActividadService.createNewActividad(this.newActividad);
      this.No = this.No + 1 ;
      this.newActividad = new Actividad;
      this.getAllActividades();
    }
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllActividades(){
    this.ActividadService.getAllActividades().subscribe(   misActividadesObs => {   this.misActividades = misActividadesObs;   }   )
    this.dataSource = new MatTableDataSource(this.misActividades);
  }
  
  displayedColumns: string[] = ['idActividad', 'nombreActividad', "star"];
  dataSource = new MatTableDataSource(this.misActividades);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {   
  }
}