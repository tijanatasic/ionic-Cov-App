import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinesListPageRoutingModule } from './vaccines-list-routing.module';

import { VaccinesListPage } from './vaccines-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinesListPageRoutingModule
  ],
  declarations: [VaccinesListPage]
})
export class VaccinesListPageModule {}
