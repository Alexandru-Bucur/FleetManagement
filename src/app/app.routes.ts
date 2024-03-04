import { Routes } from '@angular/router';
import { ROUTES } from './shared/utils/static';

export const routes: Routes = [
  { path: '', redirectTo: ROUTES.HOME, pathMatch: 'full' },
  {
    path: ROUTES.HOME,
    loadComponent: () => import('./views/home/home.component'),
  },
  {
    path: ROUTES.MIOPERCORSO,
    loadComponent: () => import('./views/mio-percorso/mio-percorso.component'),
  },

  {
    path: ROUTES.GESTISCIMODELLI,
    loadComponent: () =>
      import('./views/gestisci-modelli/gestisci-modelli.component'),
  },
  {
    path: ROUTES.ILMIOMODELLO,
    loadComponent: () =>
      import('./views/il-mio-modello/il-mio-modello.component'),
  },

  {
    path: ROUTES.DELEGHE,
    loadComponent: () => import('./views/deleghe/deleghe.component'),
  },

  {
    path: ROUTES.ADMINISTRAZIONE,
    loadComponent: () =>
      import('./views/administrazione/administrazione.component'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./views/page-not-found/page-not-found.component'),
  },
];
