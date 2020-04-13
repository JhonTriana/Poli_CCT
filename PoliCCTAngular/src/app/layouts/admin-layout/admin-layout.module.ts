import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RequestManagementComponent } from '../../request-management/request-management.component'; 
import { EmployeeRegistrationComponent} from '../../employee-registration/employee-registration.component'
import { ActividadComponent } from 'app/actividad/actividad.component';
import { DocumentoComponent } from 'app/documento/documento.component';
import { CriterioComponent } from 'app/criterio/criterio.component';
import { SeguridadFisicaComponent } from 'app/seguridad-fisica/seguridad-fisica.component';
import { RegistroDependenciasComponent } from 'app/registrodependencias/registrodependencias.component';
import { RegistroComponent } from 'app/registro/registro.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CiudadComponent } from 'app/ciudad/ciudad.component';
import { SedeComponent } from 'app/sede/sede.component';
import { UbicacionComponent } from 'app/ubicacion/ubicacion.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
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
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  declarations: [
    DashboardComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
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
    UbicacionComponent
  ]
})

export class AdminLayoutModule {}
