import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  misEmpleados;
  newEmpleado: Empleado;
  dataSource = new MatTableDataSource(this.misEmpleados);
  No = 1;
  indiceTabla = 0;
  cantidadTabla = 0;

  constructor(private EmployeeService: EmployeeService, public dialog: MatDialog) {
    this.getAllEmpleados();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAllEmpleados() {
    this.EmployeeService.getAllEmpleados().subscribe(misEmpleadosObs => {
      this.misEmpleados = misEmpleadosObs['data'];
      this.dataSource = new MatTableDataSource(this.misEmpleados);
      this.newEmpleado = new Empleado;
      this.dataSource.paginator = this.paginator;
    });
  }
  openDialogNuevoEmpleado(): void {
    const dialogRef = this.dialog.open(EmpleadoEmergente, {
      width: '300px',
      data: { Empleado }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.identificacion === undefined || result.nombreEmpleado === undefined ||
        result.direccion === undefined || result.telefono === undefined ||
        result.cargo === undefined || result.contacto === undefined ||
        result.numero_contacto === undefined || result.mail === undefined) {
        alert('Datos Incompletos');
      }
      else {
        this.newEmpleado.idEmpleado = this.No;
        this.newEmpleado.nombreEmpleado = result.nombreEmpleado;
        this.newEmpleado.identificacion = result.identificacion;
        this.newEmpleado.direccion = result.direccion;
        this.newEmpleado.telefono = result.telefono;
        this.newEmpleado.cargo = result.cargo;
        this.newEmpleado.contacto = result.contacto;
        this.newEmpleado.numero_contacto = result.numero_contacto;
        this.newEmpleado.mail = result.mail;
        this.newEmpleado.idContratista = this.No; //Pendiente Arreglar
        this.EmployeeService.createNewEmpleado(this.newEmpleado).subscribe(
          consulta => {
            this.getAllEmpleados();
            alert('Registro Exitoso');
          });
      }
    });
  }
  openDialogEditarEmpleado(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla);
    const dialogRef = this.dialog.open(EmpleadoEmergente, {
      width: '300px',
      data: {
        identificacion: this.misEmpleados[element].identificacion, nombreEmpleado: this.misEmpleados[element].nombreEmpleado,
        direccion: this.misEmpleados[element].direccion, telefono: this.misEmpleados[element].telefono,
        cargo: this.misEmpleados[element].cargo, contacto: this.misEmpleados[element].contacto,
        numero_contacto: this.misEmpleados[element].numero_contacto, mail: this.misEmpleados[element].mail
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.identificacion === undefined || result.nombreEmpleado === undefined ||
        result.direccion === undefined || result.telefono === undefined ||
        result.cargo === undefined || result.contacto === undefined ||
        result.numero_contacto === undefined || result.mail === undefined ||
        result.identificacion === null || result.nombreEmpleado === null ||
        result.direccion === null || result.telefono === null ||
        result.cargo === null || result.contacto === null ||
        result.numero_contacto === null || result.mail === null) {
        alert('Datos Incompletos');
      }
      else {
        this.newEmpleado.idEmpleado = this.misEmpleados[element].idEmpleado;
        this.newEmpleado.nombreEmpleado = result.nombreEmpleado;
        this.newEmpleado.identificacion = result.identificacion;
        this.newEmpleado.direccion = result.direccion;
        this.newEmpleado.telefono = result.telefono;
        this.newEmpleado.cargo = result.cargo;
        this.newEmpleado.contacto = result.contacto;
        this.newEmpleado.numero_contacto = result.numero_contacto;
        this.newEmpleado.mail = result.mail;
        this.newEmpleado.idContratista = this.No; //Pendiente Arreglar
        this.EmployeeService.editarEmpleado(this.newEmpleado).subscribe(
          consulta => {
            this.getAllEmpleados();
            alert('Registro Exitoso');
          });
      }
    });
  }
  eliminarEmpleado(element) {
    element = element + (this.indiceTabla * this.cantidadTabla);
    var r = confirm('¿Esta seguro que desea Eliminar el Registro?');
    if (r === true) {
      this.EmployeeService.eliminarEmpleado(this.misEmpleados[element].idEmpleado).subscribe(
        consulta => {
          this.getAllEmpleados();
          alert('Registro Eliminado Exitosamente');
          return true;
        });
    } else {
      return false;
    }
  }

  displayedColumns: string[] = ['idEmpleado', 'identificacion', 'nombreEmpleado', 'direccion',
    'telefono', 'cargo', 'mail', "star"]; //'contacto' ,'numero_contacto',
  ngAfterViewInit() {
    this.paginator.page.subscribe(
      (event) => {
        this.indiceTabla = event.pageIndex;
        this.cantidadTabla = event.pageSize;
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'employee.Emergente',
  templateUrl: 'employee.Emergente.html',
})
export class EmpleadoEmergente {
  constructor(public dialogRef: MatDialogRef<EmpleadoEmergente>,
    @Inject(MAT_DIALOG_DATA) public data: {
      Empleado, identificacion, nombreEmpleado, direccion,
      telefono, cargo, contacto, numero_contacto, mail
    }) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}