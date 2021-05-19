import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinePageRoutingModule } from './vaccine-routing.module';

import { VaccinePage } from './vaccine.page';
import { NumbersComponent } from './numbers/numbers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinePageRoutingModule
  ],
  declarations: [VaccinePage,NumbersComponent]
})
export class VaccinePageModule {}
