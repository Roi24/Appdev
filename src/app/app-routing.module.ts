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
    path: 'wedding',
    loadChildren: () => import('./wedding/wedding.module').then( m => m.WeddingPageModule)
  },
  {
    path: 'massched',
    loadChildren: () => import('./massched/massched.module').then( m => m.MasschedPageModule)
  },
  {
    path: 'baptismal',
    loadChildren: () => import('./baptismal/baptismal.module').then( m => m.BaptismalPageModule)
  },
  {
    path: 'offsched',
    loadChildren: () => import('./offsched/offsched.module').then( m => m.OffschedPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  },
  {
    path: 'reservedwed2',
    loadChildren: () => import('./reservedwed2/reservedwed2.module').then( m => m.Reservedwed2PageModule)
  },
  {
    path: 'reservedwed',
    loadChildren: () => import('./reservedwed/reservedwed.module').then( m => m.ReservedwedPageModule)
  },
  {
    path: 'reservedwed3',
    loadChildren: () => import('./reservedwed3/reservedwed3.module').then( m => m.Reservedwed3PageModule)
  },
  {
    path: 'steps',
    loadChildren: () => import('./steps/steps.module').then( m => m.StepsPageModule)
  },
  {
    path: 'adhome',
    loadChildren: () => import('./adhome/adhome.module').then( m => m.AdhomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }