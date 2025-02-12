import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { AppComponent } from './app/app.component';
import { APP_BASE_HREF } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    provideRouter(routes),
    provideHttpClient()
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
