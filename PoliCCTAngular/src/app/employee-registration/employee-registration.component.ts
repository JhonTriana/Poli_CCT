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

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  misEmpleados ; 
  newEmpleado: Empleado;
  dataSource = new MatTableDataSource(this.misEmpleados);
  No = 0 ;
  
  constructor(private EmployeeService: EmployeeService , public dialog: MatDialog ) { 
    this.getAllEmpleados();
    console.log ("Mis empleados.. ",this.misEmpleados);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllEmpleados(){
   this.EmployeeService.getAllEmpleados().subscribe(   misEmpleadosObs => {   this.misEmpleados = misEmpleadosObs;   }   )
    this.dataSource = new MatTableDataSource(this.misEmpleados);
    this.newEmpleado = new Empleado;
    for (let i = 0; i < this.misEmpleados.length -1 ; i++) {
      if(this.misEmpleados[i].idContratista === undefined){
        this.No = 1 ;
      }else if(this.misEmpleados[i].idRegistro > this.misEmpleados[i+1].idContratista) {
        this.No = this.misEmpleados[i].idContratista + 1 ;
      }else{
        this.No = this.misEmpleados[i+1].idContratista + 1 ;
      }
    }
  }
  openDialogNuevoEmpleado(): void {
    const dialogRef = this.dialog.open(EmpleadoEmergente, {
      width: '300px',
      data: { identificacion: this.misEmpleados.identificacion , nombreEmpleado: this.misEmpleados.nombreEmpleado , direccion: this.misEmpleados.direccion , telefono: this.misEmpleados.telefono , cargo: this.misEmpleados.cargo , contacto: this.misEmpleados.contacto,numero_contacto: this.misEmpleados.numero_contacto,mail: this.misEmpleados.mail } 
    });
    dialogRef.afterClosed().subscribe(result => {
      this.newEmpleado.identificacion = result.identificacion;
      this.newEmpleado.nombreEmpleado = result.nombreEmpleado;
      this.newEmpleado.direccion = result.direccion;
      this.newEmpleado.telefono = result.telefono;
      this.newEmpleado.cargo = result.cargo;
      this.newEmpleado.contacto = result.contacto;
      this.newEmpleado.numero_contacto = result.numero_contacto;
      this.newEmpleado.mail = result.mail;
      if (this.newEmpleado.identificacion === undefined || this.newEmpleado.nombreEmpleado === undefined || this.newEmpleado.direccion === undefined || this.newEmpleado.telefono === undefined || this.newEmpleado.cargo === undefined || this.newEmpleado.contacto === undefined||this.newEmpleado.numero_contacto === undefined|| this.newEmpleado.mail === undefined ){
      }
      else{
        this.newEmpleado.idContratista = this.No ; 
        this.EmployeeService.createNewEmpleado(this.newEmpleado);
        this.getAllEmpleados();
      }
    });
  }
  openDialogEditarEmpleado(element): void {
    const dialogRef = this.dialog.open(EmpleadoEmergente, {
      width: '300px',
      data: { identificacion: this.misEmpleados[element].identificacion, nombreEmpleado: this.misEmpleados[element].nombreEmpleado,  direccion: this.misEmpleados[element].direccion , telefono: this.misEmpleados[element].telefono , cargo: this.misEmpleados[element].cargo , contacto: this.misEmpleados[element].contacto,numero_contacto: this.misEmpleados[element].numero_contacto,mail: this.misEmpleados[element].mail }    });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(result.nombreEmpleado);
        if (result.identificacion === undefined || result.nombreEmpleado === undefined || result.direccion === undefined ||
            result.telefono === undefined || result.cargo === undefined || result.contacto === undefined || result.numero_contacto === undefined ||
            result.mail === undefined  ){
        }
        else{
          this.EmployeeService.editarEmpleado(element, result.identificacion,result.nombreEmpleado, result.direccion, result.telefono, result.cargo, result.contacto,result.numero_contacto, result.mail);
          this.getAllEmpleados();
        }
      });
    }
    eliminarEmpleado(element){
      this.EmployeeService.eliminarEmpleado(element);
      this.getAllEmpleados();
    } 

    
    displayedColumns: string[] = ['idContratista', 'identificacion', 'nombreEmpleado' , 'direccion' , 'telefono' , 'cargo' , 'contacto' ,'numero_contacto','mail',"star"];
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
      @Inject(MAT_DIALOG_DATA)  public data: {identificacion, nombreEmpleado, direccion, telefono, cargo,contacto, numero_contacto,mail} ) {    }
    onNoClick(): void {
      this.dialogRef.close();
    } 
  }


    






  
 
  
  

    
 
