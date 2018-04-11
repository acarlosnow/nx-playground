import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '@app/dashboard';
import { DealsModule } from '@app/deals';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    DashboardModule,
    DealsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
