import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'vaccine',
    loadChildren: () => import('./vaccine/vaccine.module').then( m => m.VaccinePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'pcr',
    loadChildren: () => import('./pcr/pcr.module').then( m => m.PcrPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'update-vaccine',
    loadChildren: () => import('./vaccine/update-vaccine/update-vaccine.module').then( m => m.UpdateVaccinePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'vaccines-list',
    loadChildren: () => import('./vaccine/vaccines-list/vaccines-list.module').then( m => m.VaccinesListPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'pcr-list',
    loadChildren: () => import('./pcr/pcr-list/pcr-list.module').then( m => m.PcrListPageModule),
    canLoad: [AuthGuard]
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
