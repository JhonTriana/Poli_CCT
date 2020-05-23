import { Component, Inject, ɵConsole } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solicitud } from '../models/Solicitud.model';
import { EmployeeService } from '../services/employee.service';
import { ActividadService } from '../services/actividad.service';
import { CriterioService } from 'app/services/criterio.service';
import { DocumentoService } from 'app/services/documento.service';
import { element } from 'protractor';

@Component({
  selector: 'solicitud-emergente',
  templateUrl: 'solicitud-emergente.component.html',
  styleUrls: ['./request-management.component.scss']
})

export class SolicitudEmergente {
  misEmpleados: [];
  misActividades;
  misCriterios;
  misDocumentos;
  documentos;
  empleados;

  constructor(public dialogRef: MatDialogRef<SolicitudEmergente>,
    @Inject(MAT_DIALOG_DATA)
    public data: Solicitud, 
    private EmployeeService: EmployeeService,
    private ActividadService: ActividadService,
    private CriterioService: CriterioService,
    private DocumentoService: DocumentoService) { }
  
    onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getAllEmpleados();
    this.getAllActividades();
  }

  getAllEmpleados() {
    this.EmployeeService.getAllEmpleados().subscribe(
      misEmpleadosObs => { 
        this.misEmpleados = misEmpleadosObs['data']; 
      });
  }

  getAllActividades(){
    this.ActividadService.getAllActividades().subscribe(
      misActividadesObs => { 
        this.misActividades = misActividadesObs['data']; 
      });
  }

  getCriteriosPorActividad(actividad){
    let documentos1 = [];
    this.CriterioService.getCriterioPorActividad(actividad.idActividad).subscribe(
      misCriteriosObs => { 
        this.misCriterios = misCriteriosObs; 

        this.misCriterios.forEach(element => {
          this.DocumentoService.getDocumento(element.idDocumento).subscribe(
            misDocumentosObs => {
              this.misDocumentos = misDocumentosObs;
              documentos1.push(misDocumentosObs);
            }
          );
        });
      }
    );
    this.documentos = documentos1;
  }

  

}
