import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solicitud } from '../models/Solicitud.model';
import { EmployeeService } from '../services/employee.service';
import { ActividadService } from '../services/actividad.service';

@Component({
  selector: 'Solicitud.Emergente',
  templateUrl: 'Solicitud.Emergente.html',
  styleUrls: ['./request-management.component.scss']
})

export class SolicitudEmergente {
  misEmpleados;
  misActividades;
  constructor(public dialogRef: MatDialogRef<SolicitudEmergente>,
    @Inject(MAT_DIALOG_DATA)
    public data: Solicitud, private EmployeeService: EmployeeService,
    private ActividadService: ActividadService) { }
  
    onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getAllEmpleados();
    this.getAllActividades();
  }

  getAllEmpleados() {
    this.EmployeeService.getAllEmpleados().subscribe(misEmpleadosObs => { this.misEmpleados = misEmpleadosObs; });
    console.log("Empleados", this.misEmpleados);
  }

  getAllActividades(){
    this.ActividadService.getAllActividades().subscribe(misActividadesObs => { this.misActividades = misActividadesObs; });
    console.log("Actividades", this.misActividades);
  }

}
