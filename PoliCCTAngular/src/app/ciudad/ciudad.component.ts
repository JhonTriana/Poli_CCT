import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Ciudad } from '../models/ciudades.model';
import { CiudadService } from '../services/ciudad.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misCiudades ; 
  newCiudad: Ciudad;
  dataSource = new MatTableDataSource(this.misCiudades);
  No = 0 ;
  
  constructor(private CiudadService: CiudadService , public dialog: MatDialog ) { 
    this.getAllCiudades();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllCiudades(){
    this.CiudadService.getAllCiudades().subscribe(   misCiudadesObs => {   this.misCiudades = misCiudadesObs;   }   )
    this.dataSource = new MatTableDataSource(this.misCiudades);
    this.newCiudad = new Ciudad;
    for (let i = 0; i < this.misCiudades.length -1 ; i++) {
      if(this.misCiudades[i].idCiudad === undefined){
        this.No = 1 ;
      }else if(this.misCiudades[i].idCiudad > this.misCiudades[i+1].idCiudad) {
        this.No = this.misCiudades[i].idCiudad + 1 ;
      }else{
        this.No = this.misCiudades[i+1].idCiudad + 1 ;
      }
    }
  }
  openDialogNuevaCiudad(): void {
    const dialogRef = this.dialog.open(CiudadEmergente, {
      width: '300px',
      data: { Ciudad }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newCiudad.nombreCiudad = result;
      if (this.newCiudad.nombreCiudad === undefined ){
      }
      else{
        this.newCiudad.idCiudad = this.No ; 
        this.CiudadService.createNewCiudad(this.newCiudad);
        this.getAllCiudades();
      }
    });
  }
  openDialogEditarCiudad(element): void {
    const dialogRef = this.dialog.open(CiudadEmergente, {
      width: '300px',
      data: { nombreCiudad: this.misCiudades[element].nombreCiudad }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined ){
      }
      else{
        this.CiudadService.editarCiudad(element,result);
        this.getAllCiudades();
      }
    });
  }
  eliminarCiudad(element){
    this.CiudadService.eliminarCiudad(element);
    this.getAllCiudades();
  } 
  displayedColumns: string[] = ['idCiudad', 'nombreCiudad', "star"];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
@Component({
  selector: 'ciudad.Emergente',
  templateUrl: 'ciudad.Emergente.html',
})
export class CiudadEmergente {
  constructor(public dialogRef: MatDialogRef<CiudadEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: Ciudad ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}