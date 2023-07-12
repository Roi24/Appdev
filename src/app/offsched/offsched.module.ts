import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffschedPageRoutingModule } from './offsched-routing.module';

import { OffschedPage } from './offsched.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffschedPageRoutingModule
  ],
  declarations: [OffschedPage]
})
export class OffschedPageModule {}
