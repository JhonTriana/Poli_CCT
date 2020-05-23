import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Documento } from '../models/documentos.model';
import { DocumentoService } from '../services/documento.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misDocumentos ; 
  newDocumento: Documento;
  dataSource = new MatTableDataSource(this.misDocumentos);
  No = 0 ;
  indiceTabla = 0 ; 
  cantidadTabla  = 0 ;
  
  constructor(private DocumentoService: DocumentoService , public dialog: MatDialog ) { 
    this.getAllDocumentos();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllDocumentos(){
    this.DocumentoService.getAllDocumentos().subscribe(   misDocumentosObs => {   
      this.misDocumentos = misDocumentosObs['data'];   
      this.dataSource = new MatTableDataSource(this.misDocumentos);
      this.newDocumento = new Documento;
      this.dataSource.paginator = this.paginator;
    });
  }
  openDialogNuevoDocumento(): void {
    const dialogRef = this.dialog.open(DocumentoEmergente, {
      width: '300px',
      data: { Documento }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.nombreDocumento === undefined || result.vigenciaDocumento === undefined){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newDocumento.idDocumento = this.No ; 
        this.newDocumento.nombreDocumento = result.nombreDocumento;
        this.newDocumento.vigenciaDocumento = result.vigenciaDocumento;
        this.DocumentoService.createNewDocumento(this.newDocumento).subscribe(  
          consulta => {                
          this.getAllDocumentos();  
          var r = alert('Registro Exitoso');
      });
      }
    });
  }
  openDialogEditarDocumento(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla );
    const dialogRef = this.dialog.open(DocumentoEmergente, {
      width: '300px',
      data: { nombreDocumento: this.misDocumentos[element].nombreDocumento, vigenciaDocumento: this.misDocumentos[element].vigenciaDocumento }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.nombreDocumento === undefined || result.vigenciaDocumento === undefined || 
          result.nombreDocumento === null || result.vigenciaDocumento === null ){
        var r = alert('Datos Incompletos');
      }
      else{
        this.newDocumento.idDocumento = this.misDocumentos[element].idDocumento ;
        this.newDocumento.nombreDocumento = result.nombreDocumento ; 
        this.newDocumento.vigenciaDocumento = result.vigenciaDocumento ; 
        this.DocumentoService.editarDocumento(this.newDocumento).subscribe(
          consulta => {                
            this.getAllDocumentos();
            var r = alert('Registro Exitoso');
        });
      }
    });
  }
  eliminarDocumento(element){
    element = element + (this.indiceTabla * this.cantidadTabla );
    var r = confirm('¿Esta seguro que desea Eliminar el Registro?');
    if(r === true){
      this.DocumentoService.eliminarDocumento(this.misDocumentos[element].idDocumento).subscribe(
        consulta => {                
          this.getAllDocumentos();
          var r1 = alert('Registro Eliminado Exitosamente');
          return true ;
      }); 
    }else{
      return false ;
    }  
  } 
  displayedColumns: string[] = ['idDocumento', 'nombreDocumento', "vigenciaDocumento" , "star"];
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
  selector: 'documento.Emergente',
  templateUrl: 'documento.Emergente.html',
})
export class DocumentoEmergente {
  constructor(public dialogRef: MatDialogRef<DocumentoEmergente>,
    @Inject(MAT_DIALOG_DATA)  public data: Documento ) {    }
  onNoClick(): void {
    this.dialogRef.close();
  } 
}