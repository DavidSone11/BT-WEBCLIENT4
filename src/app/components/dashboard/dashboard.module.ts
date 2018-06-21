import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRouting } from './dasboard.routing';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRouting,
    LaddaModule.forRoot({
      style: "contract",
      spinnerSize: 40,
      spinnerColor: "red",
      spinnerLines: 12
  })
  
  ],
  declarations: [
    DashboardComponent,
    
  ]
})
export class DashboardModule {

}
