import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinesListPageRoutingModule } from './vaccines-list-routing.module';

import { VaccinesListPage } from './vaccines-list.page';
import { VaccineElementComponent } from '../vaccine-element/vaccine-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinesListPageRoutingModule
  ],
  declarations: [VaccinesListPage,VaccineElementComponent]
})
export class VaccinesListPageModule {}
