import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RenewalPage } from './renewal.page';

import { RenewalPageRoutingModule } from './renewal-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenewalPageRoutingModule
  ],
  declarations: [RenewalPage]
})
export class RenewalPageModule {}
