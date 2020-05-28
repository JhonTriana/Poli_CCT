import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { RequestManagementComponent } from '../../request-management/request-management.component';
import { IconsComponent } from '../../icons/icons.component';
import { VideoComponent } from '../../video/video.component';
import { EmployeeRegistrationComponent } from '../../employee-registration/employee-registration.component';
import { ActividadComponent } from 'app/actividad/actividad.component';
import { CriterioComponent } from 'app/criterio/criterio.component';
import { DocumentoComponent } from 'app/documento/documento.component';
import { SeguridadFisicaComponent } from 'app/seguridad-fisica/seguridad-fisica.component';
import { RegistroDependenciasComponent } from 'app/registrodependencias/registrodependencias.component';
import { RegistroComponent } from 'app/registro/registro.component';
import { CiudadComponent } from 'app/ciudad/ciudad.component';
import { SedeComponent } from 'app/sede/sede.component';
import { UbicacionComponent } from 'app/ubicacion/ubicacion.component';
import { UsuarioComponent } from 'app/usuario/usuario.component';
import { RestorePswdComponent } from 'app/restore-pswd/restore-pswd.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'request-management', component: RequestManagementComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'employee-registration', component: EmployeeRegistrationComponent },
    { path: 'actividad', component: ActividadComponent },
    { path: 'criterio', component: CriterioComponent },
    { path: 'documento', component: DocumentoComponent },
    { path: 'seguridadFisica', component: SeguridadFisicaComponent },
    { path: 'registrodependencias', component: RegistroDependenciasComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'ciudad', component: CiudadComponent },
    { path: 'sede', component: SedeComponent },
    { path: 'ubicacion', component: UbicacionComponent },
    { path: 'Formulario-Usuario', component: UsuarioComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'video', component: VideoComponent },
    { path: 'restore', component: RestorePswdComponent}
];
