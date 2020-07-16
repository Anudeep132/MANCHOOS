import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SubscriptionPage } from './subscription.page';

import {SubscriptionPageRoutingModule } from './subscription-routing.module';


@NgModule({
  imports: [
    CommonModule,          
    FormsModule,
    IonicModule,
    SubscriptionPageRoutingModule
  ],
  declarations: [SubscriptionPage]
})
export class SubscriptionPageModule {}
