import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaptismalPageRoutingModule } from './baptismal-routing.module';

import { BaptismalPage } from './baptismal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaptismalPageRoutingModule
  ],
  declarations: [BaptismalPage]
})
export class BaptismalPageModule {}
