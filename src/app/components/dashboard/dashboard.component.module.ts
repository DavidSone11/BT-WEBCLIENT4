import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRouting } from './dasboard.component.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    DashBoardRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class dashboardComponentModule { }
