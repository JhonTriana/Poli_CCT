//Formulario Registro Contratistas
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Registro } from '../models/registros.model';
import { RegistroService } from '../services/registro.service';
import { MatTableDataSource } from '@angular/material';
import { Ciudad } from '../models/ciudades.model';      //Se importa Ciudad
import { CiudadService } from '../services/ciudad.service';  //Se importa Ciudad Service
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//Comentario
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  misRegistros;
  newRegistro: Registro;
  misCiudades;
  ciudad: Ciudad;
  dataSource = new MatTableDataSource(this.misRegistros);  //Se agrega 16052020
  No = 0;
  indiceTabla = 0; //se agrega 16052020
  cantidadTabla = 0; //se agrega 16052020

  constructor(private RegistroService: RegistroService, private CiudadService: CiudadService, public dialog: MatDialog) {
    this.getAllRegistros();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAllRegistros() {
    this.RegistroService.getAllRegistros().subscribe(misRegistrosObs => {
      this.misRegistros = misRegistrosObs['data'];                    //se agrega data 16052020
      this.CiudadService.getAllCiudades().subscribe(misCiudadesObs => {
        this.misCiudades = misCiudadesObs['data'];                    //se agrega data 16052020
        for (let a = 0; a < this.misRegistros.length; a++) {
          for (let b = 0; b < this.misCiudades.length; b++) {
            if (this.misRegistros[a].idCiudad === this.misCiudades[b].idCiudad) {
              this.misRegistros[a].idCiudad = this.misCiudades[b].ciudadname;
            }
          }
        }
        this.dataSource = new MatTableDataSource(this.misRegistros);    //se agrega 16/05/2020
        this.dataSource.paginator = this.paginator;                     //se agrega 16/05/2020
        this.newRegistro = new Registro;                                //se agrega 16/05/2020
      });
    });
  }
  openDialogNuevaRegistro(): void {
    const dialogRef = this.dialog.open(RegistroEmergente, {
      width: '400px',
      data: { Registro, misCiudades: this.misCiudades }          //se borran todos los argumentos
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Result1: ", result.ntCcRegistro);
      console.log("Result2: ", result.nombreRegistro);
      console.log("Result3: ", result.direccionRegistro);
      console.log("Result4: ", result.nombreCiudad);
      console.log("Result5: ", result.telefonoRegistro);
      console.log("Result6: ", result.celularRegistro);
      if (result === undefined ||
        result.ntCcRegistro === undefined || result.nombreRegistro === undefined ||
        result.direccionRegistro === undefined || result.nombreCiudad === undefined ||
        result.telefonoRegistro === undefined || result.celularRegistro === undefined) {
        alert('Datos Incompletos');
      }
      else {
        for (let b = 0; b < this.misCiudades.length; b++) {
          if (result.nombreCiudad === this.misCiudades[b].ciudadname) {
            this.newRegistro.idCiudad = this.misCiudades[b].idCiudad;
          }
        }
        this.newRegistro.idRegistro = this.No;
        this.newRegistro.ntCcRegistro = result.ntCcRegistro;
        this.newRegistro.nombreRegistro = result.nombreRegistro;
        this.newRegistro.direccionRegistro = result.direccionRegistro;
        this.newRegistro.telefonoRegistro = result.telefonoRegistro;
        this.newRegistro.celularRegistro = result.celularRegistro;
        this.RegistroService.createNewRegistro(this.newRegistro).subscribe(
          consulta => {
            this.getAllRegistros();
            alert('Registro Exitoso');
          });
      }
    });
  }
  openDialogEditarRegistro(element): void {
    element = element + (this.indiceTabla * this.cantidadTabla);
    const dialogRef = this.dialog.open(RegistroEmergente, {
      width: '400px',
      data: {
        misCiudades: this.misCiudades,
        idRegistro: this.misRegistros[element].idRegistro,
        ntCcRegistro: this.misRegistros[element].ntCcRegistro,
        nombreRegistro: this.misRegistros[element].nombreRegistro,
        direccionRegistro: this.misRegistros[element].direccionRegistro,
        nombreCiudad: this.misRegistros[element].idCiudad,
        telefonoRegistro: this.misRegistros[element].telefonoRegistro,
        celularRegistro: this.misRegistros[element].celularRegistro
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined || result === null ||
        result.ntCcRegistro === undefined || result.nombreRegistro === undefined ||
        result.direccionRegistro === undefined || result.nombreCiudad === undefined ||
        result.telefonoRegistro === undefined || result.celularRegistro === undefined ||
        result.ntCcRegistro === null || result.nombreRegistro === null ||
        result.direccionRegistro === null || result.nombreCiudad === null ||
        result.telefonoRegistro === null || result.celularRegistro === null) {
        alert('Datos Incompletos');
      }
      else {
        for (let b = 0; b < this.misCiudades.length; b++) {
          if (result.nombreCiudad === this.misCiudades[b].ciudadname) {
            this.newRegistro.idCiudad = this.misCiudades[b].idCiudad;
          }
        }
        this.newRegistro.idRegistro = this.misRegistros[element].idRegistro;
        this.newRegistro.ntCcRegistro = result.ntCcRegistro;
        this.newRegistro.nombreRegistro = result.nombreRegistro;
        this.newRegistro.direccionRegistro = result.direccionRegistro;
        this.newRegistro.telefonoRegistro = result.telefonoRegistro;
        this.newRegistro.celularRegistro = result.celularRegistro;
        this.RegistroService.editarRegistro(this.newRegistro).subscribe(
          consulta => {
            this.getAllRegistros();
            alert('Registro Editado Exitosamente');
          });
      }
    });
  }
  eliminarRegistro(element) {
    element = element + (this.indiceTabla * this.cantidadTabla);
    var r = confirm('¿Esta seguro que desea Eliminar el Registro?');
    if (r === true) {
      this.RegistroService.eliminarRegistro(this.misRegistros[element].idRegistro).subscribe(
        consulta => {
          this.getAllRegistros();
          alert('Registro Eliminado Exitosamente');
          return true;
        }
      );
    } else {
      return false;
    }
  }
  displayedColumns: string[] = ['idRegistro', 'ntCcRegistro', 'nombreRegistro', 'direccionRegistro', /*'ciudadRegistro'*/ 'nombreCiudad', 'telefonoRegistro', 'celularRegistro', "star"];
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
  selector: 'registro.Emergente',
  templateUrl: 'registro.Emergente.html',
})
export class RegistroEmergente {
  constructor(public dialogRef: MatDialogRef<RegistroEmergente>,
    @Inject(MAT_DIALOG_DATA) public data: Registro) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}