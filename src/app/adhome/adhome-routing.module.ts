import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdhomePage } from './adhome.page';

const routes: Routes = [
  {
    path: '',
    component: AdhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdhomePageRoutingModule {}
