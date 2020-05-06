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
import { MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent} from 'app/login/login.component';
import { MatSelectFilterModule } from 'mat-select-filter';
import { SolicitudEmergente } from '../../request-management/SolicitudEmergente';
import { MatTreeModule } from '@angular/material/tree';
import { A11yModule} from '@angular/cdk/a11y';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { PortalModule} from '@angular/cdk/portal';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { CdkStepperModule} from '@angular/cdk/stepper';
import { CdkTableModule} from '@angular/cdk/table';
import { CdkTreeModule} from '@angular/cdk/tree';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatBadgeModule} from '@angular/material/badge';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatChipsModule} from '@angular/material/chips';
import { MatStepperModule} from '@angular/material/stepper';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatDividerModule} from '@angular/material/divider';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatListModule} from '@angular/material/list';
import { MatNativeDateModule} from '@angular/material/core';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatRadioModule} from '@angular/material/radio';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSortModule} from '@angular/material/sort';
import { MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';

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
    MatTreeModule,
    MatToolbarModule,
    MatTabsModule,
    MatSortModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatStepperModule,
    MatChipsModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatAutocompleteModule,
    CdkTreeModule,
    CdkTableModule,
    CdkStepperModule,
    ScrollingModule,
    PortalModule,
    DragDropModule,
    A11yModule
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