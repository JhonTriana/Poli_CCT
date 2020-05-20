import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { IconsComponent } from './icons/icons.component';
// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { RequestManagementComponent } from './request-management/request-management.component';
import { MatExpansionModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material/';
// import { ActividadComponent } from './actividad/actividad.component';
// import { CriterioComponent } from './criterio/criterio.component';
// import { DocumentoComponent } from './documento/documento.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { VideoComponent } from './video/video.component';

import {
  AgmCoreModule
} from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { ActividadService } from './services/actividad.service';
import { DocumentoService } from './services/documento.service';
import { CriterioService } from './services/criterio.service';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    // AdminLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule //Se importa Una Sola Vez para todo el Proyecto
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  providers: [ //Importar los los servicios
    ActividadService,
    DocumentoService,
    CriterioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
