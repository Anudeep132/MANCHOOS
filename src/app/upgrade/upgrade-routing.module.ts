import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpGradePage } from './upgrade.page';

const routes: Routes = [
  {
    path: '',
    component: UpGradePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpGradePageRoutingModule {}
