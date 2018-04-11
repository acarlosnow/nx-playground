import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardViewComponent } from './containers/dashboard-view/dashboard-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DashboardViewComponent
  ]
})
export class DashboardViewModule {}
