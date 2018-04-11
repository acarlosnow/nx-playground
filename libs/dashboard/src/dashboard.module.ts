import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const dashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    children: [
      {
        path: ':dashboardId',
        loadChildren:
          './dashboard-view/dashboard-view.module#DashboardViewModule',
        pathMatch: 'full'
      },
      {
        path: ':dashboardId/edit',
        loadChildren:
          './dashboard-view/dashboard-view.module#DashboardViewModule',
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes)]
})
export class DashboardModule {}
