import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reservedwed2Page } from './reservedwed2.page';

const routes: Routes = [
  {
    path: '',
    component: Reservedwed2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reservedwed2PageRoutingModule {}
