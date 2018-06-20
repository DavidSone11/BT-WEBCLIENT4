import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ChartsRouting } from './charts.routing';
import { ChartsModule as ngChart } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsRouting,
    ngChart
  
  ],
  declarations: [
    ChartsComponent,
    
  ]
})
export class nChartsModule {

}
