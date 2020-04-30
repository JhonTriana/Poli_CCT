import { Component, OnInit, Inject, ViewChild } from '@angular/core'; 
import { RegistroDependencias } from '../models/registrodependencias1.model';
import { RegistroDependenciasService } from '../services/registrodependencias.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registrodependencias',
  templateUrl: './registrodependencias.component.html',
  styleUrls: ['./registrodependencias.component.scss']
})
export class RegistroDependenciasComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misRegistroDependencias1 ; 
  newRegistroDependencias: RegistroDependencias;
  dataSource = new MatTableDataSource(this.misRegistroDependencias1);
  No = 0 ;
  
  constructor(private RegistroDependenciasService: RegistroDependenciasService , public dialog: MatDialog ) { 
    this.getAllRegistroDependencias1();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllRegistroDependencias1(){
    this.RegistroDependenciasService.getAllRegistroDependencias1().subscribe(   misRegistroDependencias1Obs => {   this.misRegistroDependencias1 = misRegistroDependencias1Obs;   }   )
    this.dataSource = new MatTableDataSource(this.misRegistroDependencias1);
    this.newRegistroDependencias = new RegistroDependencias;
    for (let i = 0; i < this.misRegistroDependencias1.length -1 ; i++) {
      if(this.misRegistroDependencias1[i].idRegistroDependencias === undefined){
        this.No = 1 ;
      }else if(this.misRegistroDependencias1[i].idRegistroDependencias > this.misRegistroDependencias1[i+1].idRegistroDependencias) {
        this.No = this.misRegistroDependencias1[i].idRegistroDependencias + 1 ;
      }else{
        this.No = this.misRegistroDependencias1[i+1].idRegistroDependencias + 1 ;
      }
    }
  }
  openDialogNuevaRegistroDependencias(): void {
    const dialogRef = this.dialog.open(RegistroDependenciasEmergente, {
      width: '300px',
      data: {idRegistroDependencias: this.misRegistroDependencias1.idRegistroDependencias , ntCcRegistroDependencias: this.misRegistroDependencias1.ntCcRegistroDependencias , nombreRegistroDependencias: this.misRegistroDependencias1.nombreRegistroDependencias , cargoRegistroDependencias: this.misRegistroDependencias1.cargoRegistroDependencias , areaRegistroDependencias: this.misRegistroDependencias1.areaRegistroDependencias , celularRegistroDependencias: this.misRegistroDependencias1.celularRegistroDependencias , telefonoRegistroDependencias: this.misRegistroDependencias1.telefonoRegistroDependencias, extensionRegistroDependencias: this.misRegistroDependencias1.extensionRegistroDependencias,
      correoElectronicoRegistroDependencias: this.misRegistroDependencias1.correoElectronicoRegistroDependencias } 
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newRegistroDependencias.ntCcRegistroDependencias = result;
      this.newRegistroDependencias.nombreRegistroDependencias = result;
      this.newRegistroDependencias.cargoRegistroDependencias = result;
      this.newRegistroDependencias.areaRegistroDependencias = result;
      this.newRegistroDependencias.celularRegistroDependencias = result;
      this.newRegistroDependencias.telefonoRegistroDependencias = result;
      this.newRegistroDependencias.extensionRegistroDependencias = result;
      this.newRegistroDependencias.correoElectronicoRegistroDependencias = result;
      if (this.newRegistroDependencias.ntCcRegistroDependencias === undefined , this.newRegistroDependencias.nombreRegistroDependencias === undefined , this.newRegistroDependencias.cargoRegistroDependencias === undefined , this.newRegistroDependencias.areaRegistroDependencias === undefined , this.newRegistroDependencias.celularRegistroDependencias === undefined , this.newRegistroDependencias.telefonoRegistroDependencias === undefined, this.newRegistroDependencias.extensionRegistroDependencias === undefined , this.newRegistroDependencias.correoElectronicoRegistroDependencias === undefined ){
      }
      else{
        this.newRegistroDependencias.idRegistroDependencias = this.No ; 
        this.RegistroDependenciasService.createNewRegistroDependencias(this.newRegistroDependencias);
        this.getAllRegistroDependencias1();
      }
    });
  }
  openDialogEditarRegistroDependencias(element): void {
    const dialogRef = this.dialog.open(RegistroDependenciasEmergente, {
      width: '300px',
      data: {idRegistroDependencias: this.misRegistroDependencias1.idRegistroDependencias , ntCcRegistroDependencias: this.misRegistroDependencias1.ntCcRegistroDependencias , nombreRegistroDependencias: this.misRegistroDependencias1.nombreRegistroDependencias , cargoRegistroDependencias: this.misRegistroDependencias1.cargoRegistroDependencias , areaRegistroDependencias: this.misRegistroDependencias1.areaRegistroDependencias , celularRegistroDependencias: this.misRegistroDependencias1.celularRegistroDependencias , telefonoRegistroDependencias: this.misRegistroDependencias1.telefonoRegistroDependencias, extensionRegistroDependencias: this.misRegistroDependencias1.extensionRegistroDependencias,
        correoElectronicoRegistroDependencias: this.misRegistroDependencias1.correoElectronicoRegistroDependencias } 
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined ){
      }
      else{
        let número = this.misRegistroDependencias1[element].idRegistroDependencias ; 
        this.eliminarRegistroDependencias(element);
        this.newRegistroDependencias.idRegistroDependencias = número ;
        this.newRegistroDependencias.ntCcRegistroDependencias = número;
        this.newRegistroDependencias.nombreRegistroDependencias = result;
        this.newRegistroDependencias.cargoRegistroDependencias = result;
        this.newRegistroDependencias.areaRegistroDependencias = result;
        this.newRegistroDependencias.celularRegistroDependencias = número;
        this.newRegistroDependencias.telefonoRegistroDependencias = número;
        this.newRegistroDependencias.extensionRegistroDependencias = número;
        this.newRegistroDependencias.correoElectronicoRegistroDependencias = result;
        this.RegistroDependenciasService.createNewRegistroDependencias(this.newRegistroDependencias);
        this.getAllRegistroDependencias1();
      }
    });
  }
  eliminarRegistroDependencias(element){
    this.RegistroDependenciasService.eliminarRegistroDependencias(element);
    this.getAllRegistroDependencias1();
  } 
  displayedColumns: string[] = ['idRegistroDependencias', 'ntCcRegistroDependencias', 'nombreRegistroDependencias' , 'cargoRegistroDependencias' , 'areaRegistroDependencias' , 'celularRegistroDependencias' , 'telefonoRegistroDependencias' , 'extensionRegistroDependencias' , 'correoElectronicoRegistroDependencias' , "star"];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
@Component({
  selector: 'registrodependencias.Emergente',
  templateUrl: 'registrodependencias.Emergente.html',
})
export class RegistroDependenciasEmergente {
  constructor(public dialogRef: MatDialogRef<RegistroDependenciasEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: RegistroDependencias ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}