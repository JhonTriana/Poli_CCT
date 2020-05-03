import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { RequestManagementComponent } from '../../request-management/request-management.component'; 
import { VideoComponent } from 'app/video/video.component';
import { EmployeeRegistrationComponent, EmpleadoEmergente} from 'app/employee-registration/employee-registration.component';
import { ActividadComponent, ActividadEmergente } from 'app/actividad/actividad.component';
import { DocumentoComponent, DocumentoEmergente } from 'app/documento/documento.component';
import { CriterioComponent, CriterioEmergente } from 'app/criterio/criterio.component';
import { SeguridadFisicaComponent } from 'app/seguridad-fisica/seguridad-fisica.component';
import { RegistroDependenciasComponent, RegistroDependenciasEmergente } from 'app/registrodependencias/registrodependencias.component';
import { RegistroComponent, RegistroEmergente } from 'app/registro/registro.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CiudadComponent, CiudadEmergente } from 'app/ciudad/ciudad.component';
import { SedeComponent, SedeEmergente } from 'app/sede/sede.component';
import { UbicacionComponent, UbicacionEmergente } from 'app/ubicacion/ubicacion.component';
import { UsuarioComponent, UsuarioEmergente } from 'app/usuario/usuario.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatListModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent} from 'app/login/login.component';
import { MatSelectFilterModule } from 'mat-select-filter';
import { SolicitudEmergente } from '../../request-management/SolicitudEmergente';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,        
    ReactiveFormsModule,        
    MatButtonModule,        
    MatRippleModule,
    MatFormFieldModule, 
    MatInputModule,                     
    MatTooltipModule,
    MatExpansionModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectFilterModule,
    MatListModule
  ],
  declarations: [
    DashboardComponent,    
    IconsComponent,    
    NotificationsComponent,
    RequestManagementComponent,
    VideoComponent,
    LoginComponent,
    RequestManagementComponent,    
    EmployeeRegistrationComponent,    
    ActividadComponent,
    DocumentoComponent,    
    CriterioComponent,    
    RequestManagementComponent,    
    SeguridadFisicaComponent,
    RegistroDependenciasComponent,    
    RegistroComponent,    
    CiudadComponent,    
    SedeComponent,   
    UbicacionComponent,
    UsuarioComponent,
    ActividadEmergente,
    DocumentoEmergente, 
    CiudadEmergente,
    CriterioEmergente,
    RegistroEmergente,
    RegistroDependenciasEmergente,
    EmpleadoEmergente,
    UsuarioEmergente,
    CiudadEmergente,
    SolicitudEmergente,
    SedeEmergente, 
    UbicacionEmergente
  ],
  entryComponents: [
    ActividadEmergente, 
    DocumentoEmergente,
    CriterioEmergente,
    RegistroEmergente,
    RegistroDependenciasEmergente,
    EmpleadoEmergente,
    UsuarioEmergente,
    CiudadEmergente,
    SolicitudEmergente,
    SedeEmergente, 
    UbicacionEmergente
  ]

})

export class AdminLayoutModule {}