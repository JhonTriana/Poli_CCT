import { Component, OnInit } from '@angular/core';
import { Actividad } from '../models/actividades.model';
import { ActividadService } from '../actividad.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})

export class ActividadComponent implements OnInit {

  newActividad: Actividad;
  misActividades;
  
  constructor(private ActividadService: ActividadService) { 
    this.newActividad = new Actividad;
  }
  nuevaActividad(){
    this.ActividadService.createNewActividad(this.newActividad);
    this.newActividad = new Actividad;
    this.getAllActividades();
  }
  ngOnInit() {
  }  
  getAllActividades(){
    this.ActividadService.getAllActividades().subscribe(
      misActividadesObs => {
        this.misActividades = misActividadesObs;
      }
    )
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export class TableFilteringExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}