import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasschedPageRoutingModule } from './massched-routing.module';

import { MasschedPage } from './massched.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasschedPageRoutingModule
  ],
  declarations: [MasschedPage]
})
export class MasschedPageModule {}
