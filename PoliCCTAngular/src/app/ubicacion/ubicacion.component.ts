import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Ubicacion } from '../models/ubicaciones.model';
import { UbicacionService } from '../services/ubicacion.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})
export class UbicacionComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misUbicaciones ; 
  newUbicacion: Ubicacion;
  dataSource = new MatTableDataSource(this.misUbicaciones);
  No = 0 ;
  
  constructor(private UbicacionService: UbicacionService , public dialog: MatDialog ) { 
    this.getAllUbicaciones();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllUbicaciones(){
    this.UbicacionService.getAllUbicaciones().subscribe(   misUbicacionesObs => {   this.misUbicaciones = misUbicacionesObs;   }   )
    this.dataSource = new MatTableDataSource(this.misUbicaciones);
    this.newUbicacion = new Ubicacion;
    for (let i = 0; i < this.misUbicaciones.length -1 ; i++) {
      if(this.misUbicaciones[i].idUbicacion === undefined){
        this.No = 1 ;
      }else if(this.misUbicaciones[i].idUbicacion > this.misUbicaciones[i+1].idUbicacion) {
        this.No = this.misUbicaciones[i].idUbicacion + 1 ;
      }else{
        this.No = this.misUbicaciones[i+1].idUbicacion + 1 ;
      }
    }
  }
  openDialogNuevaUbicacion(): void {
    const dialogRef = this.dialog.open(UbicacionEmergente, {
      width: '300px',
      data: { Ubicacion }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newUbicacion.nombreUbicacion = result;
      if (this.newUbicacion.nombreUbicacion === undefined ){
      }
      else{
        this.newUbicacion.idUbicacion = this.No ; 
        this.UbicacionService.createNewUbicacion(this.newUbicacion);
        this.getAllUbicaciones();
      }
    });
  }
  openDialogEditarUbicacion(element): void {
    const dialogRef = this.dialog.open(UbicacionEmergente, {
      width: '300px',
      data: { nombreUbicacion: this.misUbicaciones[element].nombreUbicacion }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined ){
      }
      else{
        let número = this.misUbicaciones[element].idUbicacion ; 
        this.eliminarUbicacion(element);
        this.newUbicacion.idUbicacion = número ;
        this.newUbicacion.nombreUbicacion = result;
        this.UbicacionService.createNewUbicacion(this.newUbicacion);
        this.getAllUbicaciones();
      }
    });
  }
  eliminarUbicacion(element){
    this.UbicacionService.eliminarUbicacion(element);
    this.getAllUbicaciones();
  } 
  displayedColumns: string[] = ['idUbicacion', 'nombreUbicacion', "star"];
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
    @Inject(MAT_DIALOG_DATA)  public data: Ubicacion ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}