import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SalesDashboardPage } from './sales-dashboard.page';

import {SalesDashboardPageRoutingModule } from './sales-dashboard-routing.module';


@NgModule({
  imports: [
    CommonModule,          
    FormsModule,
    IonicModule,
    SalesDashboardPageRoutingModule
  ],
  declarations: [SalesDashboardPage]
})
export class SalesDashboardPageModule {}
