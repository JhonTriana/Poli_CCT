import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { RequestManagementComponent } from '../../request-management/request-management.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ActividadComponent } from 'app/actividad/actividad.component';
import { CriterioComponent } from 'app/criterio/criterio.component';
import { DocumentoComponent } from 'app/documento/documento.component';
import { SeguridadFisicaComponent } from 'app/seguridad-fisica/seguridad-fisica.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',       component: DashboardComponent },
    { path: 'user-profile',    component: UserProfileComponent },
    { path: 'request-management',     component: RequestManagementComponent },
    { path: 'typography',      component: TypographyComponent },
    { path: 'icons',           component: IconsComponent },
    { path: 'maps',            component: MapsComponent },
    { path: 'notifications',   component: NotificationsComponent },
    { path: 'upgrade',         component: UpgradeComponent },
    { path: 'actividad',       component: ActividadComponent },
    { path: 'criterio',        component: CriterioComponent },
    { path: 'documento',       component: DocumentoComponent },
    { path: 'seguridadFisica', component: SeguridadFisicaComponent },
];
