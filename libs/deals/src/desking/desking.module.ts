import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeskingComponent } from './containers/desking/desking.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DeskingComponent
      }
    ])
  ],
  declarations: [DeskingComponent]
})
export class DeskingModule { }
