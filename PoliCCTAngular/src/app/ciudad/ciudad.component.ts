import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Ciudad } from '../models/ciudades.model';
import { CiudadService } from '../services/ciudad.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { concat } from 'rxjs';

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
  indiceTabla = 0 ; 
  cantidadTabla  = 0 ;
  
  constructor(private CiudadService: CiudadService , public dialog: MatDialog ) { 
    this.getAllCiudades();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllCiudades(){
    this.CiudadService.getAllCiudades().subscribe(   misCiudadesObs => {
      this.misCiudades = misCiudadesObs['data'] ;
      this.dataSource = new MatTableDataSource(this.misCiudades);
      this.dataSource.paginator = this.paginator;     
      this.newCiudad = new Ciudad;
    });
  }
  openDialogNuevaCiudad(): void {
    const dialogRef = this.dialog.open(CiudadEmergente, {
      width: '300px',
      data: { Ciudad }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newCiudad.idCiudad = this.No ; 
        this.newCiudad.ciudadname = result; 
        this.CiudadService.createNewCiudad(this.newCiudad).subscribe(
          consulta => {                
            this.getAllCiudades();
            var r = alert('Registro Exitoso');
        });
      }
    });
  }
  openDialogEditarCiudad(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla );
    const dialogRef = this.dialog.open(CiudadEmergente, {
      width: '300px',
      data: { ciudadname: this.misCiudades[element].ciudadname }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Entra: ", result);
      if (result === undefined || result === null ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newCiudad.idCiudad = this.misCiudades[element].idCiudad ;
        this.newCiudad.ciudadname = result;
        this.CiudadService.editarCiudad(this.newCiudad).subscribe(
          consulta => {                
            this.getAllCiudades();
            var r = alert('Registro Exitoso');
        });
      }
    });
  }
  eliminarCiudad(element){
    element = element + (this.indiceTabla * this.cantidadTabla );
    var r = confirm('¿Esta seguro que desea Eliminar el Registro');
    if(r === true){
      this.CiudadService.eliminarCiudad(this.misCiudades[element].idCiudad).subscribe(
        consulta => {          
          this.getAllCiudades();
          var r1 = alert('Registro Eliminado Exitosamente');
          return true;
      });
    }else{
      return false;
    }
  } 
  displayedColumns: string[] = ['idCiudad', 'ciudadname', "star"];
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
  selector: 'ciudad.Emergente',
  templateUrl: 'ciudad.emergente.html',
})
export class CiudadEmergente {
  constructor(public dialogRef: MatDialogRef<CiudadEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: Ciudad ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}