import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcrListPageRoutingModule } from './pcr-list-routing.module';

import { PcrListPage } from './pcr-list.page';
import { PcrElementComponent } from '../pcr-element/pcr-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcrListPageRoutingModule
  ],
  declarations: [PcrListPage,PcrElementComponent]
})
export class PcrListPageModule {}
