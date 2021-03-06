import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab_record',
        loadChildren: () => import('../tab_record/tab_record.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab_statistic',
        loadChildren: () => import('../tab_statistic/tab_statistic.module').then(m => m.TabStatisticPageModule)
      },
      {
        path: 'tab_settings',
        loadChildren: () => import('../tab_settings/tab_settings.module').then(m => m.TabSettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab_record',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab_record',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
