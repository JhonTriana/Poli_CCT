import { Component, OnInit } from '@angular/core';
import { Criterio } from '../models/criterios.model';
import { CriterioService } from '../services/criterio.service';
import { MatTableDataSource } from '@angular/material';
import { Actividad } from '../models/actividades.model';
import { ActividadService } from '../services/actividad.service';
import { Documento } from '../models/documentos.model';
import { DocumentoService } from '../services/documento.service';

@Component({
  selector: 'app-criterio',
  templateUrl: './criterio.component.html',
  styleUrls: ['./criterio.component.scss']
})
export class CriterioComponent implements OnInit {
  
  newCriterio: Criterio ;
  misCriterios ;  
  documento: Documento ;
  misDocumentos ; 
  actividad: Actividad ; 
  misActividades ; 

  No = 1 ; 
  constructor(private CriterioService: CriterioService, private DocumentoService: DocumentoService, private ActividadService: ActividadService ) { 
    this.newCriterio = new Criterio;
    this.getAllCriterios();
    this.getAllActividades();
    this.getAllDocumentos();
    this.dataSource = new MatTableDataSource(this.misCriterios);
  }
  nuevoCriterio(){
    if (this.newCriterio.idCriterio === undefined ){
    }
    else{
      this.newCriterio.idCriterio = this.No ; 
      this.CriterioService.createNewCriterio(this.newCriterio);
      this.No = this.No + 1 ;
      this.newCriterio = new Criterio;
      this.getAllCriterios();
      this.getAllActividades();
    }
  }
  ngOnInit() {
  }
  getAllCriterios(){
    this.CriterioService.getAllCriterios().subscribe(   misCriteriosObs => {   this.misCriterios = misCriteriosObs;   }   )
    console.log("Paso");
    this.getActividadById(this.misCriterios.idCriterio);
    this.dataSource = new MatTableDataSource(this.misCriterios);
  }
  getAllActividades(){
    this.ActividadService.getAllActividades().subscribe(   misActividadesObs => {   this.misActividades = misActividadesObs;   }   )
    //this.dataSource = new MatTableDataSource(this.misActividades);
  }
  getActividadById(id){
    this.ActividadService.getAllActividades().subscribe(   misActividadesObs => {   this.misActividades = misActividadesObs;   }   )
  }
  getAllDocumentos(){
    this.DocumentoService.getAllDocumentos().subscribe(   misDocumentosObs => {   this.misDocumentos = misDocumentosObs;   }   )
    //this.dataSource = new MatTableDataSource(this.misDocumentos);
  }
  columnas: string[] = ['idCriterio', 'nombreActividad', 'nombreDocumento', "star"];
  dataSource = new MatTableDataSource(this.misCriterios);
  Filtro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}