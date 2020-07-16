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
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'sales-dashboard',
    loadChildren: () => import('./sales-dashboard/sales-dashboard.module').then( m => m.SalesDashboardPageModule)
  },
  {
    path: 'upgrade',
    loadChildren:() => import('./upgrade/upgrade.module').then(m => m.UpgradePageModule)
  },
  {
    path: 'subccription-renewal',
    loadChildren:() => import('./subscription-renewal/renewal.module').then(m => m.RenewalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
