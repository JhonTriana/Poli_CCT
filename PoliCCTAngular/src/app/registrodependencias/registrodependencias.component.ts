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
  misRegistroDependencias2 ;
  newRegistroDependencias: RegistroDependencias;
  dataSource = new MatTableDataSource(this.misRegistroDependencias1);  //Se agrega 16052020
  No = 0 ;
  indiceTabla = 0 ; //se agrega 16052020
  cantidadTabla  = 0 ; //se agrega 16052020
  
  constructor(private RegistroDependenciasService: RegistroDependenciasService , public dialog: MatDialog ) { 
    this.getAllRegistroDependencias1();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllRegistroDependencias1(){
    this.RegistroDependenciasService.getAllRegistroDependencias1().subscribe(   misRegistroDependencias1Obs => {   
    this.misRegistroDependencias1 = misRegistroDependencias1Obs['data'];                    //se agrega data 16052020
    this.dataSource = new MatTableDataSource(this.misRegistroDependencias1);   //se agrega 16/05/2020
    this.dataSource.paginator = this.paginator;                     //se agrega 16/05/2020
    this.newRegistroDependencias = new RegistroDependencias;                                //se agrega 16/05/2020
                                      //se quita el ciclo
    });
 }
  openDialogNuevaRegistroDependencias(): void {
    const dialogRef = this.dialog.open(RegistroDependenciasEmergente, {
      width: '400px',
      data: { RegistroDependencias }          //se borran todos los argumentos
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newRegistroDependencias.idRegistroDependencias = this.No ;
        this.newRegistroDependencias.ntCcRegistroDependencias = result,
        this.newRegistroDependencias.nombreRegistroDependencias = result,
        this.newRegistroDependencias.cargoRegistroDependencias = result,
        this.newRegistroDependencias.areaRegistroDependencias = result,
        this.newRegistroDependencias.celularRegistroDependencias = result,
        this.newRegistroDependencias.telefonoRegistroDependencias = result,
        this.newRegistroDependencias.extensionRegistroDependencias = result,
        this.newRegistroDependencias.correoElectronicoRegistroDependencias = result,
        this.RegistroDependenciasService.createNewRegistroDependencias(this.newRegistroDependencias).subscribe(
          consulta => {                
            this.getAllRegistroDependencias1();
            var r = alert('Registro Exitoso');
        });
      }
    }); 
  }
  openDialogEditarRegistroDependencias(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla );
    const dialogRef = this.dialog.open(RegistroDependenciasEmergente, {
      width: '400px',
      data: { idRegistroDependencias: this.misRegistroDependencias1[element].idRegistroDependencias , ntCcRegistroDependencias: this.misRegistroDependencias1[element].ntCcRegistroDependencias , nombreRegistroDependencias: this.misRegistroDependencias1[element].nombreRegistroDependencias , cargoRegistroDependencias: this.misRegistroDependencias1[element].cargoRegistroDependencias ,
      areaRegistroDependencias: this.misRegistroDependencias1[element].areaRegistroDependencias , celularRegistroDependencias: this.misRegistroDependencias1[element].celularRegistroDependencias , telefonoRegistroDependencias: this.misRegistroDependencias1[element].telefonoRegistroDependencias , extensionRegistroDependencias: this.misRegistroDependencias1[element].extensionRegistroDependencias , correoElectronicoRegistroDependencias: this.misRegistroDependencias1[element].correoElectronicoRegistroDependencias } 
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result === undefined || result === null){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newRegistroDependencias.idRegistroDependencias = this.misRegistroDependencias1[element].idRegistroDependencias;
        this.newRegistroDependencias.ntCcRegistroDependencias = result,
        this.newRegistroDependencias.nombreRegistroDependencias = result,
        this.newRegistroDependencias.cargoRegistroDependencias = result,
        this.newRegistroDependencias.areaRegistroDependencias = result,
        this.newRegistroDependencias.celularRegistroDependencias = result,
        this.newRegistroDependencias.telefonoRegistroDependencias = result,
        this.newRegistroDependencias.extensionRegistroDependencias = result,
        this.newRegistroDependencias.correoElectronicoRegistroDependencias = result,
        this.RegistroDependenciasService.editarRegistroDependencias(this.newRegistroDependencias).subscribe();
        this.getAllRegistroDependencias1();
        var r = alert('Registro Editado Exitosamente');
      }
    });
  }
  eliminarRegistroDependencias(element){
    element = element + (this.indiceTabla * this.cantidadTabla );
    var r = confirm('¿Esta seguro que desea Eliminar el Registro?');
    if(r === true){
      this.RegistroDependenciasService.eliminarRegistroDependencias(this.misRegistroDependencias1[element].idRegistroDependencias).subscribe();
          this.getAllRegistroDependencias1();
          var r1 = alert('Registro Eliminado Exitosamente');
          return true ; 
    }else{
      return false ;
    }  
  }  
  displayedColumns: string[] = ['idRegistroDependencias', 'ntCcRegistroDependencias', 'nombreRegistroDependencias' , 'cargoRegistroDependencias' , 'areaRegistroDependencias' , 'celularRegistroDependencias' , 'telefonoRegistroDependencias' , 'extensionRegistroDependencias' , 'correoElectronicoRegistroDependencias' , "star"];
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