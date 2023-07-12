import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reservedwed2PageRoutingModule } from './reservedwed2-routing.module';

import { Reservedwed2Page } from './reservedwed2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reservedwed2PageRoutingModule
  ],
  declarations: [Reservedwed2Page]
})
export class Reservedwed2PageModule {}
