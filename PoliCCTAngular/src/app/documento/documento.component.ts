import { Component, OnInit } from '@angular/core';
import { Documento } from '../models/documentos.model';
import { DocumentoService } from '../services/documento.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {

  newDocumento: Documento;
  misDocumentos ; 
  No = 3 ; 
  constructor(private DocumentoService: DocumentoService ) { 
    this.newDocumento = new Documento;
    this.getAllDocumentos();
    this.dataSource = new MatTableDataSource(this.misDocumentos);
  }
  nuevoDocumento(){
    if (this.newDocumento.nombreDocumento === undefined ){
    }
    else{
      this.newDocumento.idDocumento = this.No ; 
      this.DocumentoService.createNewDocumento(this.newDocumento);
      this.No = this.No + 1 ;
      this.newDocumento = new Documento;
      this.getAllDocumentos();
    }
  }
  ngOnInit() {
  }
  getAllDocumentos(){
    this.DocumentoService.getAllDocumentos().subscribe(   misDocumentosObs => {   this.misDocumentos = misDocumentosObs;   }   )
    this.dataSource = new MatTableDataSource(this.misDocumentos);
  }
  columnas: string[] = ['idDocumento', 'nombreDocumento', "star"];
  dataSource = new MatTableDataSource(this.misDocumentos);
  Filtro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
