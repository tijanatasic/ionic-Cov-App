import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVaccinePageRoutingModule } from './update-vaccine-routing.module';

import { UpdateVaccinePage } from './update-vaccine.page';
import { VaccineNumberComponent } from './vaccine-number/vaccine-number.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVaccinePageRoutingModule
  ],
  declarations: [UpdateVaccinePage,VaccineNumberComponent]
})
export class UpdateVaccinePageModule {}
