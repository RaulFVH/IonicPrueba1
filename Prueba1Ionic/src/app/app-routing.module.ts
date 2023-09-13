import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'paquetes',
    loadChildren: () => import('./paquetes/paquetes.module').then( m => m.PaquetesPageModule)
  },
  {
    path: 'repartidores',
    loadChildren: () => import('./repartidores/repartidores.module').then( m => m.RepartidoresPageModule)
  },
  {
    path: 'paquete',
    loadChildren: () => import('./paquete/paquete.module').then( m => m.PaquetePageModule)
  },
  {
    path: 'paquete2',
    loadChildren: () => import('./paquete2/paquete2.module').then( m => m.Paquete2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
