import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { MageListComponent } from './mage/mage-list/mage-list.component';
import { MageProfileComponent } from './mage/mage-profile/mage-profile.component';
import { PageNotFoundComponent } from './mage/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'mages/:id', component: MageProfileComponent, title: 'Mage' },
  { path: 'mages', component: MageListComponent, title: 'Clover Land' },
  { path: '', redirectTo: '/mages', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: 'Page introuvable' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
