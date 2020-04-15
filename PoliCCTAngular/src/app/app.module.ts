import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatButtonModule } from '@angular/material/';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {
  AgmCoreModule
} from '@agm/core';
import { DocumentEntryComponent } from './document-entry/document-entry.component';
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
    DocumentEntryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
