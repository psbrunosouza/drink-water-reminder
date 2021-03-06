import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import {
  DashboardDrinkReminderComponent
} from './dashboard-components/dashboard-drink-reminder/dashboard-drink-reminder.component';
import {DashboardAnalyticsComponent} from './dashboard-components/dashboard-analytics/dashboard-analytics.component';
import {DashboardUserComponent} from './dashboard-components/dashboard-user/dashboard-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard-components/drink-reminder'
  },
  {
    path: 'dashboard-components',
    component: DashboardPage,
    children: [
      {
        path: 'drink-reminder',
        component: DashboardDrinkReminderComponent
      },
      {
        path: 'analytics',
        component: DashboardAnalyticsComponent
      },
      {
        path: 'user',
        component: DashboardUserComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
