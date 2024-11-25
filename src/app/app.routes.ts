<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
=======
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
>>>>>>> 5f306f46e38f1834d2ea36343a75c433f32b26b3
  },
  {
    path: '',
    redirectTo: 'home-defer',
<<<<<<< HEAD
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details.page').then(m => m.DetailsPage)
  },
  {
    path: 'home-defer',
    loadComponent: () => import('./home-defer/home-defer.page').then(m => m.HomeDeferPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
=======
    pathMatch: 'full',
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./details/details.page').then((m) => m.DetailsPage),
  },
  {
    path: 'home-defer',
    loadComponent: () => import('./home-defer/home-defer.page').then((m) => m.HomeDeferPage),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
];
>>>>>>> 5f306f46e38f1834d2ea36343a75c433f32b26b3
