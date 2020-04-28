import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Documento } from '../models/documentos.model';
import { DocumentoService } from '../services/documento.service';
import { MatTableDataSource } from '@angular/material';
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
  
  constructor(private DocumentoService: DocumentoService , public dialog: MatDialog ) { 
    this.getAllDocumentos();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }  
  getAllDocumentos(){
    this.DocumentoService.getAllDocumentos().subscribe(   misDocumentosObs => {   this.misDocumentos = misDocumentosObs;   }   )
    this.dataSource = new MatTableDataSource(this.misDocumentos);
    this.newDocumento = new Documento;
    for (let i = 0; i < this.misDocumentos.length -1 ; i++) {
      if(this.misDocumentos[i].idDocumento === undefined){
        this.No = 1 ;
      }else if(this.misDocumentos[i].idDocumento > this.misDocumentos[i+1].idDocumento) {
        this.No = this.misDocumentos[i].idDocumento + 1 ;
      }else{
        this.No = this.misDocumentos[i+1].idDocumento + 1 ;
      }
    }
  }
  openDialogNuevoDocumento(): void {
    const dialogRef = this.dialog.open(DocumentoEmergente, {
      width: '300px',
      data: {idDocumento: this.misDocumentos.idDocumento , nombreDocumento: this.misDocumentos.nombreDocumento}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newDocumento.nombreDocumento = result;
      if (this.newDocumento.nombreDocumento === undefined ){
      }
      else{
        this.newDocumento.idDocumento = this.No ; 
        this.DocumentoService.createNewDocumento(this.newDocumento);
        this.getAllDocumentos();
      }
    });
  }
  openDialogEditarDocumento(element): void {
    const dialogRef = this.dialog.open(DocumentoEmergente, {
      width: '300px',
      data: {idDocumento: this.misDocumentos[element].idDocumento , nombreDocumento: this.misDocumentos[element].nombreDocumento}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined ){
      }
      else{
        let número = this.misDocumentos[element].idDocumento ; 
        this.eliminarDocumento(element);
        this.newDocumento.idDocumento = número ;
        this.newDocumento.nombreDocumento = result;
        this.DocumentoService.createNewDocumento(this.newDocumento);
        this.getAllDocumentos();
      }
    });
  }
  eliminarDocumento(element){
    this.DocumentoService.eliminarDocumento(element);
    this.getAllDocumentos();
  } 
  displayedColumns: string[] = ['idDocumento', 'nombreDocumento', "star"];
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