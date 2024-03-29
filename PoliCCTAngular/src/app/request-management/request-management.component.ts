import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { Solicitud } from '../models/Solicitud.model'
import { SolicitudService } from '../services/solicitud.service';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Empleado } from '../models/empleado.model';
import { SolicitudEmergente } from './solicitud-emergente.component';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Andres Felipe Torres', name: 'Casa Limpia', weight: 'Limieza Cafeteria', symbol: 'H'},
  {position: 'Edison Camilo Torres', name: 'Tostao', weight: 'Reparacion', symbol: 'He'},
  {position: 'GIna Katherine Vega', name: 'Cisco', weight: 'Auditoria', symbol: 'Li'},
  {position: 'Angie Tatiana Vega', name: 'Movistar', weight: 'Soporte Linea', symbol: 'Be'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
];

@Component({
  selector: 'app-request-management',
  templateUrl: './request-management.component.html',
  styleUrls: ['./request-management.component.scss']
})
export class RequestManagementComponent implements OnInit {
 /* panelOpenState = false;
  */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misSolicitudes;
  newSolicitud: Solicitud;
  No = 0 ;

  constructor(public dialog: MatDialog, private SolicitudService: SolicitudService, 
              ) {
  }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  }
  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogNuevaSolicitud(): void {
    const dialogRef = this.dialog.open(SolicitudEmergente, {
      width: '50%',
      height: '95%',
      data: { Solicitud }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newSolicitud = result;
    });
  }

  getAllSolicitudes(){
    this.SolicitudService.getAllSolicitudes().subscribe(   misSolicitudesObs => {   this.misSolicitudes = misSolicitudesObs;   }   )
    this.dataSource = new MatTableDataSource(this.misSolicitudes);
    this.newSolicitud = new Solicitud;
    for (let i = 0; i < this.misSolicitudes.length -1 ; i++) {
      if(this.misSolicitudes[i].idActividad === undefined){
        this.No = 1 ;
      }else if(this.misSolicitudes[i].idActividad > this.misSolicitudes[i+1].idActividad) {
        this.No = this.misSolicitudes[i].idActividad + 1 ;
      }else{
        this.No = this.misSolicitudes[i+1].idActividad + 1 ;
      }
    }
  }

}