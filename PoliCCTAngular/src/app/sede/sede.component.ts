import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Sede } from '../models/sedes.model';
import { SedeService } from '../services/sede.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.scss']
})
export class SedeComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misSedes ; 
  newSede: Sede;
  dataSource = new MatTableDataSource(this.misSedes);
  No = 0 ;
  
  constructor(private SedeService: SedeService , public dialog: MatDialog ) { 
    this.getAllSedes();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllSedes(){
    this.SedeService.getAllSedes().subscribe(   misSedesObs => {   this.misSedes = misSedesObs;   }   )
    this.dataSource = new MatTableDataSource(this.misSedes);
    this.newSede = new Sede;
    for (let i = 0; i < this.misSedes.length -1 ; i++) {
      if(this.misSedes[i].idSede === undefined){
        this.No = 1 ;
      }else if(this.misSedes[i].idSede > this.misSedes[i+1].idSede) {
        this.No = this.misSedes[i].idSede + 1 ;
      }else{
        this.No = this.misSedes[i+1].idSede + 1 ;
      }
    }
  }
  openDialogNuevaSede(): void {
    const dialogRef = this.dialog.open(SedeEmergente, {
      width: '300px',
      data: { Sede }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newSede.nombreSede = result;
      if (this.newSede.nombreSede === undefined ){
      }
      else{
        this.newSede.idSede = this.No ; 
        this.SedeService.createNewSede(this.newSede);
        this.getAllSedes();
      }
    });
  }
  openDialogEditarSede(element): void {
    const dialogRef = this.dialog.open(SedeEmergente, {
      width: '300px',
      data: { nombreSede: this.misSedes[element].nombreSede }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined ){
      }
      else{
        let número = this.misSedes[element].idSede ; 
        this.eliminarSede(element);
        this.newSede.idSede = número ;
        this.newSede.nombreSede = result;
        this.SedeService.createNewSede(this.newSede);
        this.getAllSedes();
      }
    });
  }
  eliminarSede(element){
    this.SedeService.eliminarSede(element);
    this.getAllSedes();
  } 
  displayedColumns: string[] = ['idSede', 'nombreSede', "star"];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
@Component({
  selector: 'sede.Emergente',
  templateUrl: 'sede.Emergente.html',
})
export class SedeEmergente {
  constructor(public dialogRef: MatDialogRef<SedeEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: Sede) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}