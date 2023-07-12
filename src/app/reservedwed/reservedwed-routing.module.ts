import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservedwedPage } from './reservedwed.page';

const routes: Routes = [
  {
    path: '',
    component: ReservedwedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservedwedPageRoutingModule {}
