import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaptismalPage } from './baptismal.page';

const routes: Routes = [
  {
    path: '',
    component: BaptismalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaptismalPageRoutingModule {}
