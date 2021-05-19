import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinesListPage } from './vaccines-list.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccinesListPageRoutingModule {}
