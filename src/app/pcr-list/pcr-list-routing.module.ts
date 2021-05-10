import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcrListPage } from './pcr-list.page';

const routes: Routes = [
  {
    path: '',
    component: PcrListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcrListPageRoutingModule {}
