import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { HTTP_BINDINGS, HTTP_PROVIDERS } from '@angular/http';

import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [appRouterProviders, Title,  HTTP_PROVIDERS]);

