import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { RequestManagementComponent } from '../../request-management/request-management.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EmpleadoComponent} from '../../empleado/empleado.component';
import { EmployeeRegistrationComponent} from '../../employee-registration/employee-registration.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent }, 
    { path: 'request-management',     component: RequestManagementComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path : 'empleado',   component : EmpleadoComponent},
    { path: 'employee-registration', component : EmployeeRegistrationComponent},
];
