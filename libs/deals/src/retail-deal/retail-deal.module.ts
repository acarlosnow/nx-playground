import { RetailDealComponent } from './containers/retail-deal/retail-deal.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RetailDealComponent
      }
    ])
  ],
  declarations: [RetailDealComponent]
})
export class RetailDealModule {}
