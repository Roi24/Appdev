import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffschedPage } from './offsched.page';

const routes: Routes = [
  {
    path: '',
    component: OffschedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffschedPageRoutingModule {}
