import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDashboardPage } from './sales-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SalesDashboardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesDashboardPageRoutingModule {}
