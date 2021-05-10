import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcrListPageRoutingModule } from './pcr-list-routing.module';

import { PcrListPage } from './pcr-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcrListPageRoutingModule
  ],
  declarations: [PcrListPage]
})
export class PcrListPageModule {}
