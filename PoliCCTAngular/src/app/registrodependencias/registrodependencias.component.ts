import { Component, OnInit, Inject, ViewChild } from '@angular/core'; 
import { RegistroDependencias } from '../models/registrodependencias1.model';
import { RegistroDependenciasService } from '../services/registrodependencias.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registrodependencias',
  templateUrl: './registrodependencias.component.html',
  styleUrls: ['./registrodependencias.component.scss']
})
export class RegistroDependenciasComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misRegistroDependencias ;
  newRegistroDependencias: RegistroDependencias;
  dataSource = new MatTableDataSource(this.misRegistroDependencias);  //Se agrega 16052020
  No = 0 ;
  indiceTabla = 0 ; //se agrega 16052020
  cantidadTabla  = 0 ; //se agrega 16052020
  
  constructor(private RegistroDependenciasService: RegistroDependenciasService , public dialog: MatDialog ) { 
    this.getAllRegistroDependencias();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllRegistroDependencias(){
    this.RegistroDependenciasService.getAllRegistroDependencias().subscribe(   misRegistroDependenciasObs => {   
      this.misRegistroDependencias = misRegistroDependenciasObs['data'];        //se agrega data 16052020
      this.dataSource = new MatTableDataSource(this.misRegistroDependencias);   //se agrega 16/05/2020
      this.dataSource.paginator = this.paginator;                               //se agrega 16/05/2020
      this.newRegistroDependencias = new RegistroDependencias;                  //se agrega 16/05/2020
    });
 }
  openDialogNuevaRegistroDependencias(): void {
    const dialogRef = this.dialog.open(RegistroDependenciasEmergente, {
      width: '400px',
      data: { RegistroDependencias }          //se borran todos los argumentos
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Resul: ",result);
      if (result.idDependencias === undefined       ||   result.idNtCC === undefined           ||
          result.idNombre === undefined             ||   result.idCargo === undefined          ||
          result.idArea === undefined               ||   result.idCelular === undefined        ||
          result.idTelefono === undefined           ||   result.idExtension === undefined      ||
          result.idCorreoElectronico === undefined  ||   result.idDependencias === undefined   ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newRegistroDependencias.idDependencias = this.No ;
        this.newRegistroDependencias.idNtCC = result.idNtCC,
        this.newRegistroDependencias.idNombre = result.idNombre,
        this.newRegistroDependencias.idCargo = result.idCargo,
        this.newRegistroDependencias.idArea = result.idArea,
        this.newRegistroDependencias.idCelular = result.idCelular,
        this.newRegistroDependencias.idTelefono = result.idTelefono,
        this.newRegistroDependencias.idExtension = result.idExtension,
        this.newRegistroDependencias.idCorreoElectronico = result.idCorreoElectronico,
        this.RegistroDependenciasService.createNewRegistroDependencias(this.newRegistroDependencias).subscribe(
          consulta => {                
            this.getAllRegistroDependencias();
            var r = alert('Registro Exitoso');
        });
      }
    }); 
  }
  openDialogEditarRegistroDependencias(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla );
    const dialogRef = this.dialog.open(RegistroDependenciasEmergente, {
      width: '400px',
      data: { idDependencias: this.misRegistroDependencias[element].idDependencias,
              idNtCC: this.misRegistroDependencias[element].idNtCC,
              idNombre: this.misRegistroDependencias[element].idNombre,
              idCargo: this.misRegistroDependencias[element].idCargo,
              idArea: this.misRegistroDependencias[element].idArea,
              idCelular: this.misRegistroDependencias[element].idCelular,
              idTelefono: this.misRegistroDependencias[element].idTelefono,
              idExtension: this.misRegistroDependencias[element].idExtension,
              idCorreoElectronico: this.misRegistroDependencias[element].idCorreoElectronico } 
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.idDependencias === undefined       ||   result.idNtCC === undefined           ||
          result.idNombre === undefined             ||   result.idCargo === undefined          ||
          result.idArea === undefined               ||   result.idCelular === undefined        ||
          result.idTelefono === undefined           ||   result.idExtension === undefined      ||
          result.idCorreoElectronico === undefined  ||   
          result.idDependencias === null            ||   result.idNtCC === null                || 
          result.idNombre === null                  ||   result.idCargo === null               ||
          result.idArea === null                    ||   result.idCelular === null             ||
          result.idTelefono === null                ||   result.idExtension === null           ||
          result.idCorreoElectronico === null       ||   result.idDependencias === null        ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newRegistroDependencias.idDependencias = this.misRegistroDependencias[element].idDependencias ;
        this.newRegistroDependencias.idNtCC = result.idNtCC,
        this.newRegistroDependencias.idNombre = result.idNombre,
        this.newRegistroDependencias.idCargo = result.idCargo,
        this.newRegistroDependencias.idArea = result.idArea,
        this.newRegistroDependencias.idCelular = result.idCelular,
        this.newRegistroDependencias.idTelefono = result.idTelefono,
        this.newRegistroDependencias.idExtension = result.idExtension,
        this.newRegistroDependencias.idCorreoElectronico = result.idCorreoElectronico,
        this.RegistroDependenciasService.editarRegistroDependencias(this.newRegistroDependencias).subscribe(
          consulta => {                
            this.getAllRegistroDependencias();
            var r = alert('Registro Editado Exitosamente');
        });
      }
    });
  }
  eliminarRegistroDependencias(element){
    element = element + (this.indiceTabla * this.cantidadTabla );
    var r = confirm('¿Esta seguro que desea Eliminar el Registro?');
    if(r === true){
      this.RegistroDependenciasService.eliminarRegistroDependencias(this.misRegistroDependencias[element].idDependencias).subscribe(
        consulta => {                
          this.getAllRegistroDependencias();
          var r1 = alert('Registro Eliminado Exitosamente');
          return true ; 
      });
    }else{
      return false ;
    }  
  }  
  displayedColumns: string[] = ['idNombre', 'idCargo', 'idArea', 'idCelular', 'idTelefono', 'idExtension', 'idCorreoElectronico', "star"];
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
    @Inject(MAT_DIALOG_DATA)  public data: { RegistroDependencias, idDependencias, idNtCC, idNombre, idCargo, 
                                             idArea, idCelular, idTelefono, idExtension, idCorreoElectronico }) {  }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}