import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RequestManagementComponent } from './request-management/request-management.component';
import { MatExpansionModule, MatButtonModule} from '@angular/material/';
import { ActividadComponent } from './actividad/actividad.component';
import { CriterioComponent } from './criterio/criterio.component';
import { DocumentoComponent } from './documento/documento.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { VideoComponent } from './video/video.component';
import { DocumentEntryComponent } from './document-entry/document-entry.component';

import {
  AgmCoreModule
} from '@agm/core';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PageNotFoundComponent,
    DocumentEntryComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
