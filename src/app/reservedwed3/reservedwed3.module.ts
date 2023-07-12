import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reservedwed3PageRoutingModule } from './reservedwed3-routing.module';

import { Reservedwed3Page } from './reservedwed3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reservedwed3PageRoutingModule
  ],
  declarations: [Reservedwed3Page]
})
export class Reservedwed3PageModule {}
