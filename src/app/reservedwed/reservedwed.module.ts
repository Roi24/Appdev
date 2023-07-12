import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservedwedPageRoutingModule } from './reservedwed-routing.module';

import { ReservedwedPage } from './reservedwed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservedwedPageRoutingModule
  ],
  declarations: [ReservedwedPage]
})
export class ReservedwedPageModule {}
