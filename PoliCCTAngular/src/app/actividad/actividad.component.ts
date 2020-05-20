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
  //Comentario
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  misActividades;
  newActividad: Actividad;
  dataSource = new MatTableDataSource(this.misActividades);
  No = 0;
  indiceTabla = 0;
  cantidadTabla = 0;

  constructor(private ActividadService: ActividadService, public dialog: MatDialog) {
    this.getAllActividades();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAllActividades() {
    this.ActividadService.getAllActividades().subscribe(misActividadesObs => {
      this.misActividades = misActividadesObs['data'];
      this.dataSource = new MatTableDataSource(this.misActividades);
      this.dataSource.paginator = this.paginator;
      this.newActividad = new Actividad;
    });
  }
  openDialogNuevaActividad(): void {
    const dialogRef = this.dialog.open(ActividadEmergente, {
      width: '300px',
      data: { Actividad }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        alert('Datos Incompletos');
      }
      else {
        this.newActividad.idActividad = this.No;
        this.newActividad.nombreActividad = result;
        this.ActividadService.createNewActividad(this.newActividad).subscribe(
          consulta => {
            this.getAllActividades();
            alert('Registro Exitoso');
          });
      }
    });
  }
  openDialogEditarActividad(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla);
    const dialogRef = this.dialog.open(ActividadEmergente, {
      width: '300px',
      data: { nombreActividad: this.misActividades[element].nombreActividad }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined || result === null) {
        alert('Datos Incompletos');
      }
      else {
        this.newActividad.idActividad = this.misActividades[element].idActividad;
        this.newActividad.nombreActividad = result;
        this.ActividadService.editarActividad(this.newActividad).subscribe(
          consulta => {
            this.getAllActividades();
            alert('Registro Exitoso');
          });
      }
    });
  }
  eliminarActividad(element) {
    element = element + (this.indiceTabla * this.cantidadTabla);
    var r = confirm('¿Esta seguro que desea Eliminar el Registro?');
    if (r === true) {
      this.ActividadService.eliminarActividad(this.misActividades[element].idActividad).subscribe(
        consulta => {
          this.getAllActividades();
          alert('Registro Eliminado Exitosamente');
          return true;
        });
    } else {
      return false;
    }
  }
  displayedColumns: string[] = ['idActividad', 'nombreActividad', "star"];
  ngAfterViewInit() {
    this.paginator.page.subscribe(
      (event) => {
        this.indiceTabla = event.pageIndex;
        this.cantidadTabla = event.pageSize;
      });
  }
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
    @Inject(MAT_DIALOG_DATA) public data: Actividad) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}