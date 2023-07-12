import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasschedPage } from './massched.page';

const routes: Routes = [
  {
    path: '',
    component: MasschedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasschedPageRoutingModule {}
