import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcrPage } from './pcr.page';

const routes: Routes = [
  {
    path: '',
    component: PcrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcrPageRoutingModule {}
