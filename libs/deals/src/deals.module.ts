import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const dealsRoutes: Route[] = [
  {
    path: 'retail-deal',
    loadChildren: './retail-deal/retail-deal.module#RetailDealModule'
  },
  {
    path: 'desking',
    loadChildren: './desking/desking.module#DeskingModule'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(dealsRoutes)]
})
export class DealsModule {}
