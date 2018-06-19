import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRouting } from './dasboard.routing';
import { StatesDirective } from '../../directives/states.directive';
@NgModule({
  imports: [
    CommonModule,
    DashBoardRouting,
  
  ],
  declarations: [
    DashboardComponent,
    StatesDirective
  ]
})
export class DashboardModule {

}
