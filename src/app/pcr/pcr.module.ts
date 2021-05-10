import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcrPageRoutingModule } from './pcr-routing.module';

import { PcrPage } from './pcr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcrPageRoutingModule
  ],
  declarations: [PcrPage]
})
export class PcrPageModule {}
