/*!

=========================================================
* Poli CCT - v1.0.0
=========================================================

* Product By: DevOps Solutions 
* Copyright 2020 (https://www.devopssolutions.com)
* Licensed under MIT
* Proyecto de Aula Politécnico Grancolombiano

=========================================================

*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
