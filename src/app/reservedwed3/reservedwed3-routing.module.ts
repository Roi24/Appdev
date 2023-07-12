import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reservedwed3Page } from './reservedwed3.page';

const routes: Routes = [
  {
    path: '',
    component: Reservedwed3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reservedwed3PageRoutingModule {}
