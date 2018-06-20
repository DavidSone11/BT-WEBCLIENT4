import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ChartsRouting } from './charts.routing';


@NgModule({
  imports: [
    CommonModule,
    ChartsRouting,
  
  ],
  declarations: [
    ChartsComponent,
    
  ]
})
export class ChartModule {

}
