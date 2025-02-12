import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ApplicationConfig } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    provideRouter(routes),
    provideHttpClient()
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
