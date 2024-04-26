import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// import { routes } from './routes';
import { routes } from './app.routes'; 
import { RouterModule, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
