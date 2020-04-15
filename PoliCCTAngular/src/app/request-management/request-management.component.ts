import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Andres Felipe Torres', name: 'Casa Limpia', weight: 'Limieza Cafeteria', symbol: 'H'},
  {position: 'Edison Camilo Torres', name: 'Tostao', weight: 'Reparacion', symbol: 'He'},
  {position: 'GIna Katherine Vega', name: 'Cisco', weight: 'Auditoria', symbol: 'Li'},
  {position: 'Angie Tatiana Vega', name: 'Movistar', weight: 'Soporte Linea', symbol: 'Be'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
  {position: 'Ronald Fernando Vega', name: 'Ingenieros SAS', weight: 'pañete', symbol: 'B'},
];

@Component({
  selector: 'app-request-management',
  templateUrl: './request-management.component.html',
  styleUrls: ['./request-management.component.scss']
})
export class RequestManagementComponent implements OnInit {
 /* panelOpenState = false;
  */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }

  }

}
