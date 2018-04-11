import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardViewComponent } from './containers/dashboard-view/dashboard-view.component';
import { RouterModule, Route } from '@angular/router';

const dashboardViewRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardViewComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(dashboardViewRoutes)],
  declarations: [DashboardViewComponent]
})
export class DashboardViewModule {}
