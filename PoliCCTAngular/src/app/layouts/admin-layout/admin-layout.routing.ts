import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { RequestManagementComponent } from '../../request-management/request-management.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EmployeeRegistrationComponent} from '../../employee-registration/employee-registration.component';
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


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent }, 
    { path: 'request-management',     component: RequestManagementComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'employee-registration', component : EmployeeRegistrationComponent},
    { path: 'actividad',      component: ActividadComponent },
    { path: 'criterio',       component: CriterioComponent },
    { path: 'documento',      component: DocumentoComponent },
    { path: 'seguridadFisica', component: SeguridadFisicaComponent },
    { path: 'registrodependencias', component: RegistroDependenciasComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'ciudad',      component: CiudadComponent },
    { path: 'sede',       component: SedeComponent },
    { path: 'ubicacion',      component: UbicacionComponent },
    { path: 'Formulario-Usuario', component: UsuarioComponent },

];
