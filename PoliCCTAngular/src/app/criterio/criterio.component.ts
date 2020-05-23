import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Criterio } from '../models/criterios.model';
import { CriterioService } from '../services/criterio.service';
import { MatTableDataSource } from '@angular/material/table';
import { Actividad } from '../models/actividades.model';
import { ActividadService } from '../services/actividad.service';
import { Documento } from '../models/documentos.model';
import { DocumentoService } from '../services/documento.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-criterio',
  templateUrl: './criterio.component.html',
  styleUrls: ['./criterio.component.scss']
})
export class CriterioComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;  
  newCriterio: Criterio ;
  misCriterios ;  
  documento: Documento ;
  misDocumentos ; 
  actividad: Actividad ; 
  misActividades ; 
  dataSource = new MatTableDataSource(this.misActividades);
  No = 0 ;
  indiceTabla = 0 ; 
  cantidadTabla  = 0 ;

  constructor(private CriterioService: CriterioService, private DocumentoService: DocumentoService, 
              private ActividadService: ActividadService, public dialog: MatDialog ) { 
    this.getAllCriterios();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllCriterios(){
    this.CriterioService.getAllCriterios().subscribe(   misCriteriosObs => {   
      this.misCriterios = misCriteriosObs['data'];   
      this.ActividadService.getAllActividades().subscribe(   misActividadesObs => {   
        this.misActividades = misActividadesObs['data'] ;   
        this.DocumentoService.getAllDocumentos().subscribe(   misDocumentosObs => {   
          this.misDocumentos = misDocumentosObs['data'];   
          for (let a = 0; a < this.misCriterios.length; a++) {
            for (let b = 0; b < this.misActividades.length; b++) {
              if ( this.misCriterios[a].idActividad === this.misActividades[b].idActividad ){
                this.misCriterios[a].idActividad = this.misActividades[b].nombreActividad ; 
              }
            }
            for (let c = 0; c < this.misDocumentos.length; c++) {
              if ( this.misCriterios[a].idDocumento === this.misDocumentos[c].idDocumento ){
                this.misCriterios[a].idDocumento = this.misDocumentos[c].nombreDocumento ; 
              }
            }  
          }
          this.dataSource = new MatTableDataSource(this.misCriterios);
          this.dataSource.paginator = this.paginator;    
          this.newCriterio = new Criterio;
          });
      });
    });
  }
  openDialogNuevoCriterio(): void {
    const dialogRef = this.dialog.open(CriterioEmergente, {
      width: '300px',
      data: { misActividades: this.misActividades , misDocumentos: this.misDocumentos }
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result.nombreActividad === undefined || result.nombreDocumento === undefined ){
        var r = alert('Datos Incompletos');
      }
      else{
        for (let b = 0; b < this.misActividades.length; b++) {
          if ( result.nombreActividad === this.misActividades[b].nombreActividad ){
            this.newCriterio.idActividad = this.misActividades[b].idActividad ; 
          }
        }
        for (let c = 0; c < this.misDocumentos.length; c++) {
          if ( result.nombreDocumento === this.misDocumentos[c].nombreDocumento ){
            this.newCriterio.idDocumento = this.misDocumentos[c].idDocumento ; 
          }
        }  
        this.newCriterio.idCriterio = this.No ;
        this.CriterioService.crearNuevoCriterio(this.newCriterio).subscribe(
          consulta => {                
            this.getAllCriterios();
            var r = alert('Registro Exitoso');
        });
      }
    });
  }
  openDialogEditarCriterio(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla );
    const dialogRef = this.dialog.open(CriterioEmergente, {
      width: '300px',
      data: { misActividades: this.misActividades , misDocumentos: this.misDocumentos , nombreActividad: this.misCriterios[element].idActividad , nombreDocumento: this.misCriterios[element].idDocumento }
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result.nombreActividad === undefined || result.nombreDocumento === undefined
        || result.nombreActividad === null || result.nombreDocumento === null ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newCriterio.idCriterio = this.misCriterios[element].idCriterio ; 
        for (let b = 0; b < this.misActividades.length; b++) {
          if ( result.nombreActividad === this.misActividades[b].nombreActividad ){
            this.newCriterio.idActividad = this.misActividades[b].idActividad ; 
          }
        }
        for (let c = 0; c < this.misDocumentos.length; c++) {
          if ( result.nombreDocumento === this.misDocumentos[c].nombreDocumento ){
            this.newCriterio.idDocumento = this.misDocumentos[c].idDocumento ; 
          }
        }
        this.CriterioService.editarCriterio(this.newCriterio).subscribe(
          consulta => {                
            this.getAllCriterios();
            var r = alert('Registro Exitoso');
            return true;
        });
      }
    });
  }
  eliminarCriterio(element){
    element = element + (this.indiceTabla * this.cantidadTabla );
    var r = confirm('¿Esta seguro que desea Eliminar el Registro?');
    if(r === true){
          this.CriterioService.eliminarCriterio(this.misCriterios[element].idCriterio).subscribe();
          this.getAllCriterios();
          var r1 = alert('Registro Eliminado Exitosamente');
          return true ; 
    }else{
      return false ;
    }  
  } 
  displayedColumns: string[] = ['idCriterio', 'nombreActividad', 'nombreDocumento', "star"];
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
  selector: 'criterio.Emergente',
  templateUrl: 'criterio.Emergente.html',
})
export class CriterioEmergente {
  constructor(public dialogRef: MatDialogRef<CriterioEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: { misActividades , misDocumentos, nombreActividad, nombreDocumento } ){    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}