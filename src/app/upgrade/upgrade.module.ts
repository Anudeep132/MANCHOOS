import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UpGradePage } from './upgrade.page';

import { UpGradePageRoutingModule } from './upgrade-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpGradePageRoutingModule
  ],
  declarations: [UpGradePage]
})
export class UpgradePageModule {}
